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
          // Update the test-div with the team member's name and Twitter link
          $("#social-media-links").text("" + teamMember.full_name + "<br> <i class=\"fas fa-location-dot\"></i> Twitter: <a>" + teamMember.twitter_link + "</a>" + "<br> <i class=\"fas fa-location-dot\"></i> Instagram: <a>" + teamMember.instagram_link + "</a>");
        }
      });
    });
  });
  