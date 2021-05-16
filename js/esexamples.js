$(".nav-link").click(function() {
    $("#collapsibleNavbar").hide();
});
$(".navbar-toggler").click(function() {
    $("#collapsibleNavbar").toggle("slow", function() {});
});

// initialise accordion
$(function() {
    $("#accordion").accordion({
        heightStyle: "content",
        collapsible: true,
        animate: 0
    });
});