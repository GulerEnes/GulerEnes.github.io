$(document).ready(function(){
    $("#btn-e-s").click(function(){
        $("#buying-option").load("buying-options.html #btn-e-s");
    });

    $("#btn-c").click(function(){
        $("#buying-option").load("../html/buying-options.html #btn-c");
    });

    $("#btn-c-sup").click(function(){
        $("#buying-option").load("../html/buying-options.html #btn-c-sup");
    });
});