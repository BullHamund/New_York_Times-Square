var apiKey = "DqdmALlvW4YGS4KU7Mj87FScRXA4cNSa";
var apiUrl = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" + keyword + "&api-key=" + apiKey;
var keyword = "";



$(document).ready(function() {
    $("#run-search").on("click", function(event) {
        event.preventDefault();

        $("#display-review").empty();
        keyword = $("#movie-search").val();

        callAjax();
        $("#movie-search").val("");

    });
});

function callAjax() {
    apiUrl = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" + keyword +
        "&api-key=" + apiKey;
    $.ajax({
        url: apiUrl,
        method: 'GET'
    }).done(function(response) {
        var dataToArray =_.values(response.results);
        var organizedResults = _.sortBy(dataToArray, ["publication_date"]).reverse();
        for (var i = 0; i < organizedResults.length; i++) {
            var resultDiv = $("<div class='card py-2 pl-2 my-2'>");

            var titleDiv = $("<h4>").text(organizedResults[i].display_title);
            var subtitle = $("<h6 >").text(organizedResults[i].headline);
            if(organizedResults[i].opening_date === null){ organizedResults[i].opening_date = "N/A";}
            if(organizedResults[i].mpaa_rating === ""){organizedResults[i].mpaa_rating = "NR";}
            var openingD = $("<p class='mb-1'>").text("Opening Date: " + organizedResults[i].opening_date);
            var rating = $("<p class='mb-1'>").text("Rated: " + organizedResults[i].mpaa_rating);
            var reviewSummary = $("<p class='mb-2'>").text(organizedResults[i].summary_short);
            var detail = $(`<a class='col-md-4 btn mb-2 btn-info' href=${organizedResults[i].link.url} target="_blank" role='button'>Review Detail</a>`);
            resultDiv.append(titleDiv, subtitle, openingD, rating, reviewSummary, detail);
            resultDiv.append(`<button class="col-md-4 mb-2 btn-info detail" data-choice="${i}">` + "Streaming" + "<br>");
            $("#display-review").append(resultDiv);

            $(".detail").on("click", function() {
                var index = $(this).attr('data-choice');
                localStorage.setItem("summary_short", organizedResults[index].summary_short);
                localStorage.setItem("title", organizedResults[index].display_title);
                localStorage.setItem("subtitle", organizedResults[index].headline);
                localStorage.setItem("nylink", organizedResults[index].link.url);
                document.location.href = "detail.html";
            });



        }
    });
}