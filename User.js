const { Model, DataTypes } = require('sequelize');
const sequelize = require('./model');
class User extends Model {};

User.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'user'
})

module.exports = User;