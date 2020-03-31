const Sequelize = require("sequelize");
const sequelize = require('../config/index')

// Создаём описание таблички posts
const posts = sequelize.define('posts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.DataTypes.INTEGER
    },
    title: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: Sequelize.DataTypes.STRING
    }
  }, {
    timestamps: true // Колонки createdAt и updatedAt будут созданы автоматически
  });
  
 

  module.exports = posts;