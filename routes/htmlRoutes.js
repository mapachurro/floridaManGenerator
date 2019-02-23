var db = require("../models");

module.exports = function(app) {
  // Load example page and pass in an example by id
  app.get("/articles/:id", function(req, res) {
    db.Articles.findOne({ where: { id: req.params.id } }).then(function(
      dbArticles
    ) {
      console.log(dbArticles);
      res.render("articles", { articles: dbArticles });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
