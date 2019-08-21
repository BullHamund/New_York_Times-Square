var omdbId = "";
var omdbAPI; //INSERT OMDB API
function findMovieId(str) {
    //var movie = $(this).attr("data-name");
    var queryURL = "https://www.omdbapi.com/?t=" + str + "&apikey=" + omdbAPI;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        omdbId = response.imdbID;
        updateUrl();
    });
}