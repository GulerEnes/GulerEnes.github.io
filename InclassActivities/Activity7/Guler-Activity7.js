var names = [];
var scores = [];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	document.getElementById("name").focus();
	
};

function displayResults()
{
	var highestScore = 0;
	var highestName = "";
	var sum = 0;
	for(var i=0;i<scores.length;i++)
	{
		sum += scores[i];
		if (highestScore < scores[i]){
			highestScore = scores[i];
			highestName = names[i];
		}
		
	}
	var avg = sum / scores.length
	
	document.getElementById("results").innerHTML="<h2> Results </h2><br> <p> Average score = " + avg + "<p\> <p> High score = " + highestName + " with a score of " + highestScore + "<p\> "
}


function displayScores()
{
	document.getElementById("scores").innerHTML="<h2> Scores </h2>"
	var table = document.getElementById("scores_table");
	table.innerHTML = "";
	
	var header = table.createTHead();
	var headerRow = header.insertRow(0);
	var headerCellName = headerRow.insertCell(0);
	var headerCellScore = headerRow.insertCell(1);
	headerCellName.innerHTML = "<b>Name<b\>";
	headerCellScore.innerHTML = "<b>Score<b\>"

	for(var i=0;i<scores.length;i++){
		var row = table.insertRow(1);
		var cellName = row.insertCell(0);
		var cellScore = row.insertCell(1);
		cellName.innerHTML = names[i];
		cellScore.innerHTML = scores[i];

	}
}


function addScore(){
	var name = document.getElementById("name").value;
	var score = document.getElementById("score").value;
	var scoreInt = parseInt(score);

	if (score.length > 0 && name.length > 0 && scoreInt <= 100 && scoreInt >= 0){
		names.push(name);
		scores.push(scoreInt);
		document.getElementById("name").value = "";
		document.getElementById("score").value = "";
		document.getElementById("name").focus()
	}
	else{
		alert("You must enter a name and a valid score");
	}
	
}