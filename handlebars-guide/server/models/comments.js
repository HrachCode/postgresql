const Sequelize = require("sequelize");
const sequelize = require('../config/index')

 // И комменты
 let comments = sequelize.define('comments', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.DataTypes.INTEGER
    },
    posts_id: { // Связь с табличкой posts
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false
    },
    userName: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    comment: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: true // Колонки createdAt и updatedAt будут созданы автоматически
  });


  module.exports = comments;