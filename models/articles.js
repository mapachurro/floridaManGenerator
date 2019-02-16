module.exports = function(sequelize, DataTypes) {
  var Article = sequelize.define("Article", {
    headline: {
      type: sequelize.STRING,
      allowNull: false
    },
    photoPath: DataTypes.STRING,
    articleText: {
      type: sequelize.TEXT,
      validate: {
        len: [1, 5000]
      }
    },
    originalURL: DataTypes.STRING
  });
  return Article;
};
