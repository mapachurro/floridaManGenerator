var db = require("../models");

module.exports = function(app) {
  app.get("/create", function(req, res) {
    res.render("userCreate");
  });

  app.get("/find", function(req, res) {
    res.render("search");
  });

  app.get("/create", function(req, res) {
    res.render("userCreate");
  });

  app.get("/stupidity", function(req, res) {
    res.render("stupidity");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
