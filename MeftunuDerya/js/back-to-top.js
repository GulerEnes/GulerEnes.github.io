$(document).ready(function(){
    $('.back-to-top').hide();
    $(window).scroll(function(){
        var showAfter = 300;
        if ( $(this).scrollTop() > showAfter ) { 
            $('.back-to-top').fadeIn();
        } else { 
            $('.back-to-top').fadeOut();
        }
    });
 
    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
 
});