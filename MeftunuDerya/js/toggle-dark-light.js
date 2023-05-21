$(document).ready(function(){
    var mode = true;
    $('.toggle-dark-light').click(function(){
        if (mode){
            $("body").css("background", "linear-gradient(0.25turn, rgb(10, 24, 58), rgb(10, 24, 58))");
            $("body").css("color", "white");
            $(".toggle-dark-light").css("color", "#fff");
            $(".back-to-top").css("color", "#fff");
            mode = false;
        }
        else{
            $("body").css("background", "linear-gradient(0.25turn, rgb(233, 248, 249), rgb(165, 191, 252), rgb(165, 191, 252), rgb(233, 248, 249))");
            $("body").css("color", "black");
            $(".toggle-dark-light").css("color", "");
            $(".back-to-top").css("color", "");
            mode = true;
        }
        
        return false;
    });
});


