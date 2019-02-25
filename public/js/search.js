window.onload = function() {
  $("#srch-btn").on("click", function(event) {
    event.preventDefault();
    searchTerm = $("#search-term").val().trim();
    console.log(searchTerm);
    window.location.href = "/api/search/" + searchTerm;
  });
};
