// accessibility button
$(document).ready(function(){
    $("#list").hide()
    $("#btn").click(function(){
        $("#list").slideToggle()

//light mode button
    $("#lightMode").click(function(e) {
    e.preventDefault();
    $("body").removeClass("dark-mode");
});
//dark mode button
$("#darkMode").click(function(e) {
    e.preventDefault();
    $("body").addClass("dark-mode");
});
    })
})

//ham menu open and close
$(document).ready(function(){
    $("#ham_menu").hide();
    $("#ham").click(function(){
        $("#ham_menu").slideToggle();
    })
})
//ham menu bar changes from 3 line to x
function ham(x) {
  x.classList.toggle("change");
}