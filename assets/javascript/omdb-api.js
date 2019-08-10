var omdbId = "";

function findMovieId(str) {
    //var movie = $(this).attr("data-name");
    var queryURL = "https://www.omdbapi.com/?t=" + str + "&apikey=trilogy";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        omdbId = response.imdbID;
        updateUrl();
    });
}