/* global $, _ */
require('dotenv').config();

const path = require('path');
const db = require('./db');
const requestify = require('requestify');
const watson = require('watson-developer-cloud');
const queries = require('./queries');

// Not implemented yet in this version, still in testing
// eslint-disable-next-line no-unused-vars
const toneAnalyzer = watson.tone_analyzer({
  username: process.env.WATSONUSERNAME,
  password: process.env.WATSONPASSWORD,
  version: 'v3',
  version_date: '2016-05-19',
});

// YQL query urls for rss feeds
// const financeUpi = "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Frss.upi.com%2Fnews%2Fbusiness_news.rss'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
// const financeMW = "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.marketwatch.com%2Fmarketwatch%2Fbulletins'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
// const financeReuters = "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.reuters.com%2Freuters%2FhotStocksNews'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
let financeNews = [];

// const techTechCrunch = "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.feedburner.com%2FTechCrunch%2F%3Fformat%3Dxml'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
// const techEngadget = "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'www.engadget.com%2Frss-full.xml'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
// const techGizmodo = "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.gawker.com%2Fgizmodo%2Ffull%3Fformat%3Dxml'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
let techNews = [];

// const newsUpi = "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Frss.upi.com%2Fnews%2Fnews.rss'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
// const newsReuters = "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.reuters.com%2Freuters%2FtopNews%3Fformat%3Dxml'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
// const newsAP = "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Fhosted.ap.org%2Flineups%2FTOPHEADS.rss%3FSITE%3DAP%26SECTION%3DHOME'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
let news = [];

// const sportsUpi = "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Frss.upi.com%2Fnews%2Fsports_news.rss'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
// const sportsAP = "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Fhosted.ap.org%2Flineups%2FSPORTSHEADS.rss%3FSITE%3DAP%26SECTION%3DHOME'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
// const sportsReuters = "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.reuters.com%2Freuters%2FsportsNews%3Fformat%3Dxml'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
let sportsNews = [];

// Update functions for rss feeds
const updateFinance = () => {
  financeNews = [];
  requestify.get(queries.financeUpi).then((upi) => {
    let titles = JSON.parse(upi.body).query.results.rss;
    let alternate = true;
    titles.forEach((element) => {
      if (alternate) {
        financeNews.push(element.channel.item.title);
        alternate = false;
      } else {
        alternate = true;
      }
    });
    return requestify.get(queries.financeMW).then((mw) => {
      titles = JSON.parse(mw.body).query.results.rss;
      titles.forEach((element) => {
        financeNews.push(element.channel.item.title);
      });
      return requestify.get(queries.financeReuters).then((reuters) => {
        titles = JSON.parse(reuters.body).query.results.rss;
        titles.forEach((element) => {
          financeNews.push(element.channel.item.title);
        });
        console.log('Updated finance');
      });
    });
  })
  .catch((error) => {
    console.log('FINANCE GET ERROR', error);
  });
};

const updateTech = () => {
  techNews = [];
  requestify.get(queries.techTechCrunch).then((techcrunch) => {
    let titles = JSON.parse(techcrunch.body).query.results.rss;
    titles.forEach((element) => {
      techNews.push(element.channel.item.title);
    });
    return requestify.get(queries.techEngadget).then((engadget) => {
      titles = JSON.parse(engadget.body).query.results.rss;
      titles.forEach((element) => {
        techNews.push(element.channel.item.title);
      });
      return requestify.get(queries.techGizmodo).then((gizmodo) => {
        titles = JSON.parse(gizmodo.body).query.results.rss;
        titles.forEach((element) => {
          techNews.push(element.channel.item.title);
        });
        console.log('Updated tech');
      });
    });
  })
  .catch((error) => {
    console.log('TECH GET ERROR', error);
  });
};

const updateNews = () => {
  news = [];
  requestify.get(queries.newsUpi).then((upi) => {
    let titles = JSON.parse(upi.body).query.results.rss;
    let alternate = true;
    titles.forEach((element) => {
      if (alternate) {
        news.push(element.channel.item.title);
        alternate = false;
      } else {
        alternate = true;
      }
    });
    return requestify.get(queries.newsAP).then((ap) => {
      titles = JSON.parse(ap.body).query.results.rss;
      titles.forEach((element) => {
        news.push(element.channel.item.title);
      });
      return requestify.get(queries.newsReuters).then((reuters) => {
        titles = JSON.parse(reuters.body).query.results.rss;
        titles.forEach((element) => {
          news.push(element.channel.item.title);
        });
        console.log('Updated news');
      });
    });
  })
  .catch((error) => {
    console.log('NEWS GET ERROR', error);
  });
};

const updateSports = () => {
  sportsNews = [];
  requestify.get(queries.sportsUpi).then((upi) => {
    let titles = JSON.parse(upi.body).query.results.rss;
    let alternate = true;
    titles.forEach((element) => {
      if (alternate) {
        sportsNews.push(element.channel.item.title);
        alternate = false;
      } else {
        alternate = true;
      }
    });
    return requestify.get(queries.sportsAP).then((ap) => {
      titles = JSON.parse(ap.body).query.results.rss;
      titles.forEach((element) => {
        sportsNews.push(element.channel.item.title);
      });
      return requestify.get(queries.sportsReuters).then((reuters) => {
        titles = JSON.parse(reuters.body).query.results.rss;
        titles.forEach((element) => {
          sportsNews.push(element.channel.item.title);
        });
        console.log('Updated sports');
      });
    });
  })
  .catch((error) => {
    console.log('SPORTS GET ERROR', error);
  });
};

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
    // console.log('HERE', req.user);
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

  getState: (req, res) => {
    console.log('getState called');
    db.User.find({ where: { userName: req.user.username } })
      .then((foundUser) => {
        const result = {
          interests: foundUser.interests,
          RSSFeeds: {
            news,
            finance: financeNews,
            tech: techNews,
            sports: sportsNews,
            stocks: ['Stocks is a VIP feature!'],
            clear: [''],
          },
          user: {
            firstName: foundUser.firstName,
            lastName: foundUser.lastName,
            userName: foundUser.userName,
          },
        };

        db.Button.findAll({ where: { UserId: foundUser.id } })
          .then((buttonKeys) => {
            result.buttons = buttonKeys.reduce((buttons, buttonKey) => {
              // console.log(buttonKey.buttonName, buttonKey.links);
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
    // console.log('req.body', req.body);
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
    updateNews();
    updateFinance();
    updateTech();
    updateSports();
    setInterval(() => {
      updateNews();
      updateFinance();
      updateTech();
      updateSports();
    }, 900000);
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
