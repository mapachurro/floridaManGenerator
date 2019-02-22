var db = require("../models");
var Sequelize = require("sequelize");

module.exports = function(app) {
  // This selects a single, random, entry to be loaded as an article to the page
  app.get("/api/newPage", function(req, res) {
    db.Articles.findOne({ order: [Sequelize.literal("RAND()")] }).then(function(
      dbArticles
    ) {
      res.render("random-article", { articles: dbArticles });
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
