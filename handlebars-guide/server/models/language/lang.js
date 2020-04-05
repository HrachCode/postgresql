const Sequelize = require("sequelize");
const sequelize = require('../../config/index')
const JsonField = require('sequelize-json')

 // И lang
 let lang = sequelize.define('language', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.DataTypes.INTEGER
    },
   
    value1: JsonField(sequelize, 'language', 'value1'),
    language: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false // Колонки createdAt и updatedAt ne будут созданы автоматически
  });


  module.exports = lang;


  // Sequelize.ARRAY(Sequelize.STRING),