window.onload = function() {
  $("#srch-btn").on("click", function(event) {
    event.preventDefault();
    // eslint-disable-next-line prettier/prettier
    searchTerm = $("#search-term").val().trim();
    console.log(searchTerm);
    window.location.href = "/api/search/" + searchTerm;
  });
};
