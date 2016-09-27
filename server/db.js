const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: true,
  },
});

const User = db.define('User', {
  userName: { type: Sequelize.STRING, unique: true },
  interests: Sequelize.INTEGER,
  buttons: Sequelize.INTEGER,
});

const UserInterests = db.define('UserInterests', {});
const UserButtons = db.define('UserButtons', {});

const InterestList = db.define('InterestList', {
  interestName: Sequelize.STRING,
  interestList: Sequelize.INTEGER,
});

const RSSFeed = db.define('RSSFeed', {
  RSSName: Sequelize.STRING,
  RSSUrl: Sequelize.STRING,
});

const Button = db.define('Button', {
  buttonName: Sequelize.STRING,
  linkList: Sequelize.INTEGER,
});

const Link = db.define('Link', {
  linkName: Sequelize.STRING,
  linkUrl: Sequelize.STRING,
});

Link.belongsTo(Button);
Button.hasMany(Link);

RSSFeed.belongsTo(InterestList);
InterestList.hasMany(RSSFeed);

Button.belongsToMany(User, { through: 'UserButtons' });
InterestList.belongsToMany(User, { through: 'UserInterests' });

User.belongsToMany(Button, { through: 'UserButtons' });
User.belongsToMany(InterestList, { through: 'UserInterests' });

// sync all tables
[User, UserButtons, UserInterests, InterestList, RSSFeed, Button, Link]
  .forEach(table => table.sync({ logging: false }));
// [User, UserButtons, UserInterests, InterestList, RSSFeed, Button, Link]
//   .forEach(table =>
//     table.sync({ force: true })
//       .then(syncedTable => console.log(`${syncedTable} successfully synced`))
//       .catch(err => console.error(err)));

module.exports = { User, Button, Link, UserButtons, UserInterests };
