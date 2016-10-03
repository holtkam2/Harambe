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

const getUser = (username) => {
  db.User.find({ where: { userName: username } })
    .then((result) => {
      console.log('found user ', username);
      return result;
    });
};

const saveToUser = (state) => {
  db.user.find({ where: { userName: state.username } })
    .then((result) => {
      console.log('updating user, ', result);
      // update what need updating, leave rest alone
    });
};

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
    const state = getUser(req.params.username);
    res.status().json(state);
  },

  saveState: (req, res) => {
    console.log('saveState');
    saveToUser(req.body);
    res.status().send('haha');
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
