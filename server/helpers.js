const path = require('path');
const db = require('./db');

  // getAllUsers: (req, res) => {
  //   db.User.findAll({})
  //     .then(result => res.status(200).json(result))
  //     .catch(error => res.status(404).send(error));
  // },


  // deleteUser: (req, res) => {
  //   db.User.destroy({ where: { userName: req.params.username } })
  //     .then(() => res.sendStatus(204))
  //     .catch(error => res.status(404).send(error));
  // },

// user.belongsToMany(button)
// button.belongsToMany(user)

// user.create()...
// button.create()...
// button.create()...

// // save them... and then:
// user.setbuttons([button1, button2]).then(function() {
//   // saved!
// })

const createUser = (user) => {
  db.User.create({
    userName: user.username,
    firstName: user.givenName,
    lastName: user.surname,
    isAdmin: false,
  });
  db.User.setButton([]);
  db.User.setInterestLists([]);
};

// const getUser = (username) => {
//   db.User.find({ where: { userName: username } })
//     .then((result) => {
//       console.log('found user ', username);
//       return result;
//     });
// };

// const saveToUser = (state) => {
//   db.User.find({ where: { userName: state.username } })
//     .then((result) => {
//       console.log('updating user, ', result);
//       // update what needs updating, leave rest alone
//     });
// };

module.exports = {
  getSlash: (req, res) => {
    console.log('HERE', req.user);
    db.User.find({ where: { userName: req.user.username } })
      .then((result) => {
        if (result) {
          console.log('user found, serving up some hot & fresh html');
        } else {
          createUser(req.user);
        }
      });
    res.sendFile('index.html', { root: path.resolve(__dirname, '../client') });
  },

  getState: (req, res) => {
    console.log('getState');
    db.User.find({ where: { userName: req.user.username } })
      .then((foundUser) => {
        const result = {};

        db.Button.findAll({ where: { UserId: foundUser.id } })
          .then((buttonKeys) => {
            result.user = {
              firstName: foundUser.firstName,
              lastName: foundUser.lastName,
              userName: foundUser.userName,
            };

            result.buttons = buttonKeys.reduce((buttons, buttonKey) => {
              // console.log(buttonKey.buttonName, buttonKey.links);
              // we are using the reduce to build up properties:
              // eslint-disable-next-line no-param-reassign
              buttons[buttonKey.buttonName] = buttonKey.links;
              return buttons;
            }, {});
          })
          .then(() => {
            db.Interest.findAll({ where: { interestName: { $in: foundUser.interests } } })
              .then((interestKeys) => {
                result.interests = interestKeys.reduce((interests, interestKey) => {
                  // console.log(interestKey.interestName, interestKey.RSSFeeds);
                  // we are using the reduce to build up properties:
                  // eslint-disable-next-line no-param-reassign
                  interests[interestKey.interestName] = interestKey.RSSFeedAggregate;
                  return interests;
                }, {});
              })
              .then(() => res.status(200).json(result));
          })
          .catch(error => res.status(500).send(error));
      })
      .catch(error => res.status(404).send(error));
  },

  saveState: (req, res) => {
    db.User.find({ where: { userName: req.user.username } })
      .then((foundUser) => {
        foundUser.update({ interests: req.body.interests })
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
