var guessValue = document.getElementById("guessValue");
var submitBtn = document.getElementById("submitGuess");
var results = document.getElementById("result");
var gameOver = document.getElementById("game-over");
var clue = document.getElementById("clue");

var recentGuess = "";
var guessValues = " ";

var arrayRightAnswer = ["HOBBIT", "HELLO", "AMERICA"];
var arrayClue = ["Little Guys with hairy feet", "Hi", "Land of the free"];
var rightAnswer = "";

var msg = "";
var totalGuessAmount = 0;

// var playersWord = prompt("choose a word");
// 	rightAnswer = playersWord.toUpperCase();
var randomWordIndex = parseInt(Math.round(Math.random()*3));
rightAnswer = arrayRightAnswer[randomWordIndex];

clue.innerHTML = arrayClue[randomWordIndex];

submitBtn.addEventListener("click", function(){
	
	recentGuess = guessValue.value.toUpperCase();
	
		

checkAnswer(recentGuess);

});


function checkAnswer(recentGuess){

	if(guessValues.includes(recentGuess)){
	
	} else if(rightAnswer.includes(recentGuess)){
		guessValues += recentGuess;
		showWord();

	}else{
		guessValues += recentGuess;
		totalGuessAmount++;
		showWord();

	}
}

function showWord(){
	var hidden = "";

	for(var j = 0; j< rightAnswer.length; j++){

		var characters = rightAnswer.charAt(j);
		

		if(guessValues.includes(characters)){
			hidden += rightAnswer.charAt(j);


		}else{

			hidden += " _ ";
			
		}

	}
	msg = hidden 

	results.innerHTML= hidden;

	isGameOver(totalGuessAmount);

}


function isGameOver(number){
	if(number < 5){
		var chancesLeft =  5 - number;

		gameOver.innerHTML = chancesLeft;

	}else{
		gameOver.innerHTML = "Game Over";

	}

}


