const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: true,
  },
});

const User = db.define('User', {
  username: Sequelize.STRING,
});

const Button = db.define('Button', {
  buttonName: Sequelize.STRING,
});

const Link = db.define('Link', {
  linkName: Sequelize.STRING,
  url: Sequelize.STRING,
});

Link.belongsTo(Button);
Button.hasMany(Link);

Button.belongsToMany(User, { through: 'UserButton' });
User.belongsToMany(Link, { through: 'UserButton' });

// sync all tables
[User, Button, Link].forEach(table =>
  table.sync({ force: true })
    .then(syncedTable => console.log(`${syncedTable} successfully synced`))
    .catch(err => console.error(err)));

module.exports = { User, Button, Link };
