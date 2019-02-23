var db = require("../models");
var Sequelize = require("sequelize");

module.exports = function(app) {
  // This selects a single, random, entry to be loaded as an article to the page
  app.get("/api/newPage", function(req, res) {
    // eslint-disable-next-line prettier/prettier
    db.Articles.findOne({ order: [Sequelize.literal("RAND()")] }).then(function(
      dbArticles
    ) {
      res.render("random-article", { articles: dbArticles });
    });
  });

  // This route allows a user to save their new article or version of an article to the database
  app.post("/api/userSave", function(req, res) {
    db.Articles.create(req.body).then(function(dbArticles) {
      res.json(dbArticles);
    });
  });
  //route to search for term
  app.get("/api/search/:query", function(req, res) {
    db.Articles.findAll({
      limit: 10,
      where: {
        articleText: {
          $like: "%" + req.params.query + "%"
        }
      }
    }).then(function(response) {
      res.render("search", { articles: response });
    });
  });
};
