var arrayRightAnswer = ["HOBBIT", "HELLO", "AMERICA"];
var arrayClue = ["Little Guys with hairy feet", "Hi", "Land of the free"];

var randomWordIndex = parseInt(Math.round(Math.random()*2));
var rightAnswer = arrayRightAnswer[randomWordIndex];

var clue = document.getElementById("clue");
clue.innerHTML = arrayClue[randomWordIndex];

var results = document.getElementsByClassName("result")[0];
for (var i = 0; i<rightAnswer.length; i++){
results.innerHTML += " _ ";


}

var submitBtn = document.getElementById("submitGuess");
submitBtn.addEventListener("click", function(){
	var guessValue = document.getElementById("guessValue");
	var recentGuess = "";
	
	recentGuess = guessValue.value.toUpperCase();

	if(recentGuess.length > 1 ){
		alert("Only one letter, Please.");

	}else{
		checkAnswer(recentGuess);
	}

});

var guessValues = " ";
var totalGuessAmount = 0;
function checkAnswer(recentGuess){

	if(guessValues.includes(recentGuess)){
		alert("You picked that Letter Already");
	
	} else if(rightAnswer.includes(recentGuess)){
		guessValues += recentGuess;
		correct();
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
var chancesLeft = 0;
var gameOver = document.getElementsByClassName("game-over")[0];
function isGameOver(number, hidden){
	if(hidden === rightAnswer ){
		gameOver.innerHTML = "You Win! Play Again?"
		
		gameOverOpition();


	} else if(number < 5){
		console.log("got here");
		 chancesLeft =  5 - number;

		gameOver.innerHTML = chancesLeft + " Chances Left";

	

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

var scoreContainer = document.getElementsByClassName("score")[0];
var spinValueShow = document.createElement("div");
var spinButton = document.getElementsByClassName("spinButton")[0];
spinButton.addEventListener("click", spin);
var spinValue = 0;
var playerScore = 0;

function spin(){
	spinValueShow.innerHTML = " ";
	spinValue = Math.round(Math.random()*60)*100;
console.log(spinValue);
	if(spinValue > 3000){
		totalGuessAmount++;
		spinValueShow.innerHTML = "You lost a Guess";
		isGameOver(totalGuessAmount);
		
	
	}else{
		scoreContainer.append(spinValueShow);
		spinValueShow.innerHTML = "Total Score: " + playerScore + " " + "Spin Result: " + spinValue;
	}	

}

function correct(){
	playerScore += spinValue
	spinValueShow.innerHTML = "Total Score: " + playerScore + " " + "Spin Result: " + spinValue;
}
function loseAGuess(){


}

