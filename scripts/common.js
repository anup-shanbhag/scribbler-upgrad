// Script snippet to fetch header HTML and add it to the current page
$(document).ready(function () {
    $("#page-hdr").load("../index.html #page-hdr > *");
});
