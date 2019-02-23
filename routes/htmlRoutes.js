var db = require("../models");

module.exports = function(app) {
  app.get("/create", function(req, res) {
    res.render("userCreate");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
