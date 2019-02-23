var apiRoutes = require("../../routes/apiRoutes");

// Get references to page elements
var $userHeadline = $("#userHeadline");
var $userArticle = $("#userArticle");
var $submitBtn = $("#submit");

// The API object contains methods for each kind of request we'll make.
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/userSave",
      data: JSON.stringify(example)
    });
  },

  getExamples: function() {
    return $.ajax({
      url: "api/newPage",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/articles/" + id,
      type: "DELETE"
    });
  }
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var userCreated = {
    userHeadline: $userHeadline.val().trim(),
    userArticle: $userArticle.val().trim()
  };
  console.log(userCreated);

  if (!(userCreated.userHeadline && userCreated.userArticle)) {
    alert("You must enter text for the headline and the article!");
    return;
  }

  API.saveExample(userCreated).then(function() {
    // refreshExamples();
  });

  $userHeadline.val("");
  $userArticle.val("");
};


$submitBtn.on("click", function(){
  handleFormSubmit(event);
});
