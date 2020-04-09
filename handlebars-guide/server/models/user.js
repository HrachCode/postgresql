const Sequelize = require("sequelize");
const sequelize = require('../config/index')

 
 let User = sequelize.define('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.DataTypes.INTEGER
    },
    password: { 
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    userName: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },
    img: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: true // Колонки createdAt и updatedAt будут созданы автоматически
  });


  module.exports = User;