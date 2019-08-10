var apiKey = "DqdmALlvW4YGS4KU7Mj87FScRXA4cNSa";
var apiUrl = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" + keyword + "&api-key=" + apiKey;
var resultArray;
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
        var results = response.results;
        var organizedResults = _.sortBy(dataToArray, ["publication_date"]).reverse()
        console.log(organizedResults);
        for (var i = 0; i < organizedResults.length; i++) {
            
            var resultDiv = $("<div class='card py-2 pl-2 my-2'>");

            var titleDiv = $("<h4>").text(organizedResults[i].display_title);
            var subtitle = $("<h6 >").text(organizedResults[i].headline);
            var reviewSummary = $("<p>").text(organizedResults[i].summary_short);
            var detail = $(`<a class='col-md-3 btn btn-info' href=${organizedResults[i].link.url} target="_blank" role='button'>Review Detail</a> <br>`);
            resultDiv.append(titleDiv, subtitle, reviewSummary, detail);
            resultDiv.append(`<button class="col-md-3 btn-info detail" data-choice="${i}">` + "Streaming" + "<br>");
            $("#display-review").append(resultDiv);

            $(".detail").on("click", function() {
                var index = $(this).attr('data-choice');
                //var jsonToSave = JSON.stringify($(this).attr('data-choice'))
                localStorage.setItem("summary_short", organizedResults[index].summary_short);
                localStorage.setItem("title", organizedResults[index].display_title);
                localStorage.setItem("subtitle", organizedResults[index].headline);
                localStorage.setItem("nylink", organizedResults[index].link.url);
                document.location.href = "detail.html";
            });



        }
    });
}

