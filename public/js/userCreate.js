// Get references to page elements
var userHeadline = $("#userHeadline");
var userArticle = $("#userArticle");
var submitBtn = $("#submitBtn");

window.onload = function() {
  $("#submitBtn").on("click", function() {
    console.log("Submit button clicked!");
    handleFormSubmit(event);
  });

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

    var Article = {
      headline: userHeadline.val().trim(),
      articleText: userArticle.val().trim()
    };
    console.log(userCreated);

    if (!(Article.userHeadline && Article.userArticle)) {
      alert("You must enter text for the headline and the article!");
      return;
    }

    API.saveExample(Article).then(function() {
      // refreshExamples();
    });

    userHeadline.val("");
    userArticle.val("");
  };
};
