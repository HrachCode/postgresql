const Sequelize = require("sequelize");


// const sequelize = new Sequelize("onvqjoin", "onvqjoin", "i9xJN2LSDFfZDYutw0bTRmFmRoH5DHfW", {
//     "logging" : false,
//     dialect: "postgres",
//     host:'balarama.db.elephantsql.com'
//   });

  const sequelize = new Sequelize("posts", "root", "", {
    "logging" : false,
    dialect: "mysql",
    host:'localhost'
  });

module.exports = sequelize;