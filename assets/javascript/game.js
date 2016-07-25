// Crystal Collector Game

$(document).ready(function() {

// Variables

var wins = 0;
var losses = 0;
var totalScore;
var pinkCrystal;
var greenCrystal;
var orangeCrystal;
var blueCrystal;

gameStart();

// Generate Random Number

function gameStart() {
	randomNumber = getrandomNumber(19,120);
	pinkCrystal = getrandomNumber(1,12);
	greenCrystal = getrandomNumber(1,12);
	blueCrystal = getrandomNumber(1,12);
	orangeCrystal = getrandomNumber(1,12);
	totalScore = 0;
	$("#randomNumber").html(randomNumber);
	$("#totalScore").html(totalScore);

}

function getrandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Crystal Click Functions

$("#pink").click(function() {
	totalScore += pinkCrystal;
	$("#totalScore").html(totalScore);
	$("#message").html("");
		if (totalScore == randomNumber) {
		wins++;
		$("#wins").html(wins);
		$("#message").html("You Win!");
		gameStart();
		} else if (totalScore > randomNumber) {
			losses++;
			$("#losses").html(losses);
			$("#message").html("You Lose!");
			gameStart();	
		}
});

$("#green").click(function() {
	totalScore += greenCrystal;
	$("#totalScore").html(totalScore);
	$("#message").html("");
		if (totalScore == randomNumber) {
		wins++;
		$("#wins").html(wins);
		$("#message").html("You Win!");
		gameStart();
		} else if (totalScore > randomNumber) {
			losses++;
			$("#losses").html(losses);
			$("#message").html("You Lose!");
			gameStart();	
		}
});

$("#blue").click(function() {
	totalScore += blueCrystal;
	$("#totalScore").html(totalScore);
	$("#message").html("");
		if (totalScore == randomNumber) {
		wins++;
		$("#wins").html(wins);
		$("#message").html("You Win!");
		gameStart();
		} else if (totalScore > randomNumber) {
			losses++;
			$("#losses").html(losses);
			$("#message").html("You Lose!");
			gameStart();	
		}
});

$("#orange").click(function() {
	totalScore += orangeCrystal;
	$("#totalScore").html(totalScore);
	$("#message").html("");
		if (totalScore == randomNumber) {
		wins++;
		$("#wins").html(wins);
		$("#message").html("You Win!");
		gameStart();
		} else if (totalScore > randomNumber) {
			losses++;
			$("#losses").html(losses);
			$("#message").html("You Lose!");
			gameStart();	
		}
});


});