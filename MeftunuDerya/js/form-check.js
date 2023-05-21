$(document).ready(function(){
    $("#formsubmit").click(function(){
        var name = $("#name").val();
        var mail = $("#mail").val();
        var subject = $("#subject").val();

        var alertMessage = "";

        if ( name.length == 0){
            alertMessage += "Name place can not be empty! \n"
        }

        if (mail.length == 0){
            alertMessage += "Mail place can not be empty! \n"
        }
        else{
            var isMatch = mail.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            if ( !isMatch ){
                alertMessage += "Email is not in a correct form, please check it. \n"
            }
        }

        if ( subject.length == 0){
            alertMessage += "Subject place can not be empty! \n"
        }

        if ( alertMessage.length != 0 ){
            alert(alertMessage);
        }
        else{
            alert("Thank you for your message. We will answer as soon as possible :)");
        }

    })
 
});