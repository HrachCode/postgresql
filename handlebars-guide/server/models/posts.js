const Sequelize = require("sequelize");
const sequelize = require('../config/index')
const comments = require('./comments');
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
  
   posts.belongsTo(comments, { as: 'post_comments', foreignKey: 'id', targetKey: 'posts_id'});

  module.exports = posts;