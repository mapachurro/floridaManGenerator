var db = require("../models");

module.exports = function(app) {
  // This selects a single, random, entry to be loaded as an article to the page
  app.get("/api/newPage", function(req, res) {
   db.Articles.findOne({ order: 'rand()' }).then(function(dbArticles) {
      res.json(dbArticles);
    });
  });

  // This route allows a user to save their new article or version of an article to the database
  app.post("/api/userSave", function(req, res) {
    db.Example.create(req.body).then(function(dbArticles) {
      res.json(dbArticles);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Articles.destroy({ where: { id: req.params.id } }).then(function(dbArticles) {
      res.json(dbArticles);
    });
  });
};
