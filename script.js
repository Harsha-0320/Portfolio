$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass("fa-window-close");
        $('header').toggleClass('active');
    })
})