var db = require("../models");
var Sequelize = require("sequelize");

module.exports = function(app) {
  // This selects a single, random, entry to be loaded as an article to the page
  app.get("/", function(req, res) {
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
        $or: [
          {
            articleText: {
              $like: "%" + req.params.query + "%"
            }
          },
          {
            headline: {
              $like: "%" + req.params.query + "%"
            }
          }
        ]
      }
    }).then(function(response) {
      res.render("search", { articles: response });
    });
  });

  //route to view specific article
  app.get("/api/article/:id", function(req, res) {
    db.Articles.findOne({ where: { id: req.params.id } }).then(function(
      response
    ) {
      res.render("random-article", { articles: response });
    });
  });

  //route to view all
  app.get("/articles/all", function(req, res) {
    db.Articles.findAll().then(function(response) {
      res.render("search", { articles: response });
    });
  });
};
