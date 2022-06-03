// Файл таблицы
// импорт требуемых классов из модуля sequelize
const { Model, DataTypes } = require('sequelize');

// импорт сведений из подготовленного ранее файла модели
const sequelize = require('./model');

// определение класса для таблицы
class User extends Model {};

// инициализация таблицы
User.init({
  //определение наименований полей/столбцов таблицы и их типов
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