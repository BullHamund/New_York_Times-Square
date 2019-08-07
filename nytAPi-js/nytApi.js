function buildQueryURL() {
    var queryURL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?";
    var queryParams = {
        "api-key": "DqdmALlvW4YGS4KU7Mj87FScRXA4cNSa",
       /* "critics-pick": "y",
        "order": "by-title" */
    };
    queryParams.query = $("#movie-search").val().trim();
    console.log("---------------\nURL: " + queryURL + "\n---------------");
    console.log(queryURL + $.param(queryParams));
    return queryURL + $.param(queryParams);
}

function clear() {
    $("#run-search").empty();
}

$("#run-search").click(function (event) {
    event.preventDefault();
    clear();
    var queryURL = buildQueryURL();
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        console.log(response);
    });
});

function updatePage(NYTData) {
    var numArticles = $("#article-count").val();
    console.log(NYTData);
    console.log("------------------------------------");
    for (var i = 0; i < numArticles; i++) {
        var article = NYTData.response.docs[i];
        var articleCount = i + 1;
        var $articleList = $("<ul>");
        $articleList.addClass("list-group");
        $("#article-section").append($articleList);
        var headline = article.headline;
        var $articleListItem = $("<li class='list-group-item articleHeadline'>");
        if (headline && headline.main) {
            console.log(headline.main);
            $articleListItem.append(
                "<span class='label label-primary'>" +
                articleCount +
                "</span>" +
                "<strong> " +
                headline.main +
                "</strong>"
            );
        }
        var byline = article.byline;

        if (byline && byline.original) {
            console.log(byline.original);
            $articleListItem.append("<h5>" + byline.original + "</h5>");
        }
        var pubDate = article.pub_date;
        console.log(article.pub_date);
        if (pubDate) {
            $articleListItem.append("<h5>" + article.pub_date + "</h5>");
        }
        $articleListItem.append("<a href='" + article.web_url + "'>" + article.web_url + "</a>");
        console.log(article.web_url);
        $articleList.append($articleListItem);

    }
}

function clear() {
    $("#article-section").empty();
}

$("#run-search").on("click", function (event) {
    event.preventDefault();
    clear();
    var queryURL = buildQueryURL();
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(updatePage);
});

$("#clear-all").on("click", clear);