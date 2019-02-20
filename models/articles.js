var Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
  var Articles = sequelize.define("Articles", {
    headline: {
      type: Sequelize.STRING,
      allowNull: false
    },
    photoPath: DataTypes.STRING,
    articleText: {
      type: Sequelize.TEXT,
      validate: {
        len: [1, 5000]
      }
    },
    originalURL: DataTypes.STRING
  });
  return Articles;
};
