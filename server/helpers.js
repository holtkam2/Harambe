const path = require('path');
const db = require('./db');

module.exports = {
  getSlash: (req, res) => {
    res.sendFile('index.html', { root: path.resolve(__dirname, '.././client') });
  },

  getAllUsers: (req, res) => {
    db.User.findAll({})
      .then(result => res.status(200).json(result))
      .catch(error => res.status(404).send(error));
  },

  getUser: (req, res) => {
    db.User.find({ where: { userName: req.params.username } })
      .then(result => res.status(200).json(result))
      .catch(error => res.status(404).send(error));
  },

  createUser: (req, res) => {
    db.User.create({ userName: req.body.userName })
      .then(result => res.status(201).json(result))
      .catch(error => res.status(409).send(error));
  },

  deleteUser: (req, res) => {
    db.User.destroy({ where: { userName: req.params.username } })
      .then(() => res.sendStatus(204))
      .catch(error => res.status(404).send(error));
  },
};
