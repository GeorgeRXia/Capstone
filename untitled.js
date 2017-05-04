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
var totalGuessAmount = 0;


var randomWordIndex = parseInt(Math.round(Math.random()*2));
rightAnswer = arrayRightAnswer[randomWordIndex];

clue.innerHTML = arrayClue[randomWordIndex];


submitBtn.addEventListener("click", function(){
	
	recentGuess = guessValue.value.toUpperCase();

	if(recentGuess.length > 1 ){
		alert("Only one letter, Please.");

	}else{
		checkAnswer(recentGuess);
	}

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
	

	results.innerHTML= hidden;

	isGameOver(totalGuessAmount, hidden);

}


function isGameOver(number, hidden){
	if(hidden === rightAnswer ){
		gameOver.innerHTML = "You Win! Play Again?"
		gameOverOpition();


	} else if(number < 5){
		var chancesLeft =  5 - number;

		gameOver.innerHTML = chancesLeft;

	}else{
		gameOver.innerHTML = "Game Over. Play Again?";
		gameOverOpition();

	}

}

function gameOverOpition(){
	var reset = document.createElement("button");
	var text = document.createTextNode("Yes");
	reset.appendChild(text);
	gameOver.append(reset);
	reset.addEventListener("click", restartGame);
}

function restartGame(){

	location.reload();

}


