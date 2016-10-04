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
});

const InterestList = db.define('InterestList', {
  interestName: Sequelize.STRING,
  // the name is set by Sequelize:
  // eslint-disable-next-line new-cap
  RSSFeeds: Sequelize.ARRAY(Sequelize.STRING),
});

const Button = db.define('Button', {
  buttonName: Sequelize.STRING,
  // the name is set by Sequelize:
  // eslint-disable-next-line new-cap
  links: Sequelize.ARRAY(Sequelize.STRING),
});

Button.belongsTo(User);
InterestList.belongsTo(User);

User.hasMany(Button);
User.hasMany(InterestList);

// sync all tables
[Test, User, Button, InterestList]
  .forEach(table => table.sync({ logging: false }));
// [User, UserButtons, UserInterests, InterestList, RSSFeed, Button, Link]
//   .forEach(table =>
//     table.sync({ force: true })
//       .then(syncedTable => console.log(`${syncedTable} successfully synced`))
//       .catch(err => console.error(err)));

module.exports = { Test, User, Button, InterestList };
