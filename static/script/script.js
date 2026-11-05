// accessibility button
$(document).ready(function(){
    $("#list").hide()
    $("#btn").click(function(){
        $("#list").slideToggle()

    $("#lightMode").click(function(e) {
    e.preventDefault();
    $("body").removeClass("dark-mode");
});

$("#darkMode").click(function(e) {
    e.preventDefault();
    $("body").addClass("dark-mode");
});
        // let expanded = $(this).attr("aria-expanded") === "true";
        // $(this).attr("aria-expanded", !expanded);
    })
})