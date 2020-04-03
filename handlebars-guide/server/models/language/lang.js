const Sequelize = require("sequelize");
const sequelize = require('../../config/index')

 // И lang
 let lang = sequelize.define('language', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.DataTypes.INTEGER
    },
   
    value1: {
     type:Sequelize.DataTypes.STRING,
      allowNull: true
    },
    language: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false // Колонки createdAt и updatedAt ne будут созданы автоматически
  });


  module.exports = lang;


  // Sequelize.ARRAY(Sequelize.STRING),