/* global $, _ */
require('dotenv').config();

const path = require('path');
const db = require('./db');
const requestify = require('requestify');
const watson = require('watson-developer-cloud');
const queries = require('./queries');

// YQL query urls for rss feeds
let financeNews = [];
let techNews = [];
let news = [];
let sportsNews = [];
let finNews = [];
let watsonFin = [];

let docSentiment = {};
let docEmotions = {};

const watsonCall = () => {
  // Some fun Watson functionality that we use
  // eslint-disable-next-line no-unused-vars
  const toneAnalyzer = watson.tone_analyzer({
    username: process.env.WATSON_TONE_USERNAME,
    password: process.env.WATSON_TONE_PASSWORD,
    version: 'v3',
    version_date: '2016-05-19',
  });

  // eslint-disable-next-line no-unused-vars
  const alchemyLanguage = watson.alchemy_language({
    api_key: process.env.WATSON_ALCHEMY_APIKEY,
  });

  // How to set parameters: http://www.ibm.com/watson/developercloud/alchemy-language/api/v1/?node#methods
  const parameters = {
    text: watsonFin,
  };

  alchemyLanguage.emotion(parameters, (err, response) => {
    if (err) {
      console.error('alchemyLanguage.emotion error:', err);
    } else {
      docEmotions = response.docEmotions;
      console.log(JSON.stringify(response, null, 2));
    }
  });

  alchemyLanguage.sentiment(parameters, (err, response) => {
    if (err) {
      console.error('alchemyLanguage.emotion error:', err);
    } else {
      docSentiment = response.docSentiment;
      console.log(JSON.stringify(response, null, 2));
    }
  });
};

const repeatGet = src =>
  requestify.get(src)
    .then((result) => {
      if (JSON.parse(result.body).query.results !== null) {
        return result;
      }

      return repeatGet(src);
    });


// function to aggregate tasty info for Watson
const popFinNews = () => {
  finNews = [];
  watsonFin = [];
  Promise.all([
    queries.financeBodyUpi,
    queries.mwTopStories,
    queries.mwCommentary,
    queries.mwSW,
    queries.mwNewsletters,
    queries.reutersHotStocks,
    queries.reutersWealth,
    queries.reutersBusiness,
    queries.reutersBankruptcy,
    queries.reutersBonds,
    queries.reutersDeals,
    queries.reutersEconomy,
    queries.reutersHedgefunds,
    queries.reutersIPOs,
    queries.reutersMergersAcquisitions,
    queries.reutersRegulatory,
    queries.reutersSummit,
    queries.reutersUSDollar,
    queries.reutersUSMarkets,
    queries.sciDailyBus,
    queries.sciDailyTop,
    queries.sciDailyTech,
    queries.wsjMarkets,
    queries.wsjBusiness,
    // Somehow the next one breaks everyhting...
    // queries.reutersGlobalMarkets,
  ].map(src => repeatGet(src)))
    .then((results) => {
      const [feed0, feed1, feed2, feed3, feed4, feed5, feed6,
        feed7, feed8, feed9, feed10, feed11, feed12, feed13,
        feed14, feed15, feed16, feed17, feed18, feed19,
        feed20, feed21, feed22, feed23] = results.map(result =>
        JSON.parse(result.body).query.results.rss);
      finNews = Array.from(new Set([...feed0, ...feed1, ...feed2,
        ...feed3, ...feed4, ...feed5, ...feed6, ...feed7, ...feed8,
        ...feed9, ...feed10, ...feed11, ...feed12, ...feed13,
        ...feed14, ...feed15, ...feed16, ...feed17, ...feed18,
        ...feed19, ...feed20, ...feed21, ...feed22, ...feed23]
        .map(element => element.channel.item.description)));
    })
    .then(() => {
      // eslint-disable-next-line array-callback-return
      finNews.map((element) => {
        // Needs to ignore the first element as it is frequently a '<p>'
        if (element.indexOf('<') < 1) {
          watsonFin.push(element);
        } else {
          watsonFin.push(element.substring(0, element.indexOf('<')));
        }
      });

      watsonCall();
    })
    .catch(error => console.error('popFinNews error:', error));
};

// Update functions for rss feeds
const updateFeeds = querySources =>
  Promise.all(querySources.map(src => repeatGet(src)))
    .then((results) => {
      const [feed0, feed1, feed2] = results.map(result =>
        JSON.parse(result.body).query.results.rss);
      return Array.from(new Set([...feed0, ...feed1, ...feed2]
        .map(element => element.channel.item.title)));
    })
    .catch(error => console.error('updateFeeds error!!!!!!!!!!!!!!!!!!!:', error));

const createUser = (user) => {
  db.User.create({
    userName: user.username,
    firstName: user.givenName,
    lastName: user.surname,
    isAdmin: false,
    interests: ['', ''],
  });
};

module.exports = {
  getSlash: (req, res) => {
    db.User.find({ where: { userName: req.user.username } })
      .then((result) => {
        if (result) {
          // eslint-disable-next-line no-console
          console.log('user found, serving up some hot & fresh html');
        } else {
          createUser(req.user);
        }
      });
    res.sendFile('index.html', { root: path.resolve(__dirname, '../client') });
  },

  getLand: (req, res) => {
    res.sendFile('land.html', { root: path.resolve(__dirname, '../client') });
  },

  getState: (req, res) => {
    db.User.find({ where: { userName: req.user.username } })
      .then((foundUser) => {
        const result = {
          interests: foundUser.interests,
          RSSFeeds: {
            news,
            finance: financeNews,
            tech: techNews,
            sports: sportsNews,
            stocks: ['customizable stocks feed is a VIP feature'],
            clear: [''],
          },
          user: {
            firstName: foundUser.firstName,
            lastName: foundUser.lastName,
            userName: foundUser.userName,
          },
          docEmotions,
          docSentiment,
        };

        db.Button.findAll({ where: { UserId: foundUser.id } })
          .then((buttonKeys) => {
            result.buttons = buttonKeys.reduce((buttons, buttonKey) => {
              // we are using the reduce to build up properties:
              // eslint-disable-next-line no-param-reassign
              buttons[buttonKey.buttonName] = buttonKey.links;
              return buttons;
            }, {});

            res.status(200).json(result);
          })
          .catch(error => res.status(500).send(error));
      })
      .catch(error => res.status(404).send(error));
  },

  saveState: (req, res) => {
    db.User.find({ where: { userName: req.user.username } })
      .then((foundUser) => {
        const interests = Object.keys(req.body.interests)
          .map(interestKey => req.body.interests[interestKey]);

        foundUser.update({ interests })
          // eslint-disable-next-line no-console
          .then(() => console.log('user updated'))
          .catch(error => res.status(500).send(error));

        const buttons = Object.keys(req.body.buttons)
          .map(buttonKey => ({
            UserId: foundUser.id,
            buttonName: buttonKey,
            links: req.body.buttons[buttonKey],
          }));

        // refresh all Buttons
        db.Button.destroy({
          where: {
            UserId: foundUser.id,
          },
        })
        .then(() => db.Button.bulkCreate(buttons))
        .then(() => res.status(202).send('haha'))
        .catch(error => res.status(500).send(error));
      })
      .catch(error => res.status(404).send(error));
  },

  updateAll: () => {
    updateFeeds([queries.financeUpi, queries.financeMW, queries.financeReuters])
      .then((results) => { financeNews = results; });
    updateFeeds([queries.techTechCrunch, queries.techEngadget, queries.techGizmodo])
      .then((results) => { techNews = results; });
    updateFeeds([queries.sportsUpi, queries.sportsAP, queries.sportsReuters])
      .then((results) => { sportsNews = results; });
    updateFeeds([queries.newsUpi, queries.newsAP, queries.newsReuters])
      .then((results) => { news = results; });
  },

  updateWatson: () => {
    popFinNews();
  },

  // Testing functions
  getAllTests: (req, res) => {
    db.Test.findAll({})
      .then(result => res.status(200).json(result))
      .catch(error => res.status(404).send(error));
  },

  getTest: (req, res) => {
    db.Test.find({ where: { testName: req.params.testname } })
      .then(result => res.status(200).json(result))
      .catch(error => res.status(404).send(error));
  },

  createTest: (req, res) => {
    db.Test.create({ testName: req.body.testName })
      .then(result => res.status(201).json(result))
      .catch(error => res.status(409).send(error));
  },

  deleteTest: (req, res) => {
    db.Test.destroy({ where: { testName: req.params.testname } })
      .then(() => res.sendStatus(204))
      .catch(error => res.status(404).send(error));
  },
};
