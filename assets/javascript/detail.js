$(document).ready(function() {
    $("#shortSummary").text(localStorage.getItem("summary_short"));
    $("#title").text(localStorage.getItem("title"));
    $("#subtitle").text(localStorage.getItem("subtitle"));
    $("#nytimeslink").attr("href", localStorage.getItem("nylink"));
});