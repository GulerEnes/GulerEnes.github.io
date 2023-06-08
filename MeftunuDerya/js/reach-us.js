$(document).ready(function() {
    // Load the JSON data
    $.getJSON("../json/team.json", function(data) {
      var teamMembers = data.team_members;
  
      // Handle click on an image
      $(".card img").click(function() {
        var altText = $(this).attr("alt");
  
        // Find the corresponding team member data
        var teamMember = teamMembers.find(function(member) {
          return member.full_name === altText;
        });
  
        if (teamMember) {
          // Update the test-div with the team member's name, Twitter link, and Instagram link
            var twitterLink = $("<a>").attr("href", teamMember.twitter_link).text("Twitter Link");
            var instagramLink = $("<a>").attr("href", teamMember.instagram_link).text("Instagram Link");
            
            $("#test-div").html("Name: " + teamMember.full_name + "<br>Twitter: ").append(twitterLink).append("<br>Instagram: ").append(instagramLink);
        }
      });
    });
  });
  