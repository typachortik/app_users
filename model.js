const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('user','username','password',{
  dialect: 'sqlite',
  host: './db.sql'
});
module.exports = sequelize;