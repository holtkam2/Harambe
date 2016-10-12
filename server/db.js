const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: true,
  },
});

const Test = db.define('Test', {
  testName: { type: Sequelize.STRING, unique: true },
  stuff: Sequelize.STRING,
});

const User = db.define('User', {
  userName: { type: Sequelize.STRING, unique: true },
  firstName: Sequelize.STRING,
  LastName: Sequelize.STRING,
  isAdmin: Sequelize.BOOLEAN,
  // the name is set by Sequelize:
  // eslint-disable-next-line new-cap
  interests: Sequelize.ARRAY(Sequelize.STRING),
});

const Interest = db.define('Interest', {
  interestName: { type: Sequelize.STRING, unique: true },
  // the name is set by Sequelize:
  // eslint-disable-next-line new-cap
  RSSFeedURLs: Sequelize.ARRAY(Sequelize.STRING),
  RSSFeedAggregate: Sequelize.STRING,
});

const Button = db.define('Button', {
  buttonName: Sequelize.STRING,
  // the name is set by Sequelize:
  // eslint-disable-next-line new-cap
  links: Sequelize.ARRAY(Sequelize.STRING),
});

Button.belongsTo(User);
User.hasMany(Button);

// sync all tables
[Test, User, Button, Interest]
  .forEach(table => table.sync({ logging: false }));

module.exports = { Test, User, Button, Interest };
