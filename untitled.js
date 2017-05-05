var arrayRightAnswer = ["HOBBIT WITH LEGS", "HELLO", "AMERICA"];
var arrayClue = ["Little Guys with hairy feet", "Hi", "Land of the free"];

var randomWordIndex = parseInt(Math.round(Math.random()*2));
var rightAnswer = arrayRightAnswer[randomWordIndex];

var clue = document.getElementById("clue");
clue.innerHTML = arrayClue[randomWordIndex];

var results = document.getElementsByClassName("result")[0];
for (var i = 0; i<rightAnswer.length; i++){
	if(rightAnswer.charAt(i) === " "){	
		var tile = document.createElement("div");
		tile.className = "tileSpace " + "tile"+i;
		tile.innerHTML += " ";
		results.appendChild(tile);

	}else {
		var tile = document.createElement("div");
		tile.className = "tile " + "tile"+i;
		tile.innerHTML += " _ ";
		results.appendChild(tile);
		
	}

}

var submitBtn = document.getElementById("submitGuess");
submitBtn.addEventListener("click", function(){
	var guessValue = document.getElementById("guessValue");
	var recentGuess = "";
	
	recentGuess = guessValue.value.toUpperCase();

		checkAnswer(recentGuess);
	

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
	wordBank();
}

function showWord(){
	
	console.log("1");

	for(var j = 0; j< rightAnswer.length; j++){
		var characters = rightAnswer.charAt(j);

		if(characters === " "){
			var divNum = "tile"+j;
			var fillInSpace = document.getElementsByClassName("tile" + j)[0];
			fillInSpace.innerHTML = " ";
			

		}else if(guessValues.includes(characters)){
			var divNum = "tile"+j;
			var fillInLetter = document.getElementsByClassName(divNum)[0];
			fillInLetter.innerHTML = characters;


		}else{
			
			var fillInMissingLetter = document.getElementsByClassName("tile" + j)[0];
			fillInMissingLetter.innerHTML = " _ ";

			
		}

	}
	var stateOfTheGame = currentStateOfWord();
	console.log(stateOfTheGame);

	isGameOver(totalGuessAmount, stateOfTheGame);

}

function currentStateOfWord(){
	var collectingState = "";
	for(let i = 0; i < rightAnswer.length ;i++){
	var divNum = "tile"+i;

	var currentWord = document.getElementsByClassName(divNum)[0];

	collectingState += currentWord.textContent; 


	}
	return collectingState;

}


var chancesLeft = 0;
var gameOver = document.getElementsByClassName("game-over")[0];
function isGameOver(number, hidden){
	if(hidden === rightAnswer ){
		gameOver.innerHTML = "You Win! Play Again?"
		
		gameOverOpition();


	} else if(number < 5){
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

	if(spinValue > 3000){
		totalGuessAmount++;
		spinValueShow.innerHTML = "You lost a guess";
		isGameOver(totalGuessAmount);
		
	
	}else{
		scoreContainer.append(spinValueShow);
		spinValueShow.innerHTML = "Total Score: " + playerScore + "<div>" + "Spin Result: " + spinValue + "</div>";
	}	

}

function correct(){
	playerScore += spinValue
	spinValueShow.innerHTML = "Total Score: " + playerScore + " " + "Spin Result: " + spinValue;
}

function wordBank(){
	var wordBank = document.getElementsByClassName("word-bank")[0];
	wordBank.innerHTML = guessValues;

}

function Player(name){
	this.name = name;
	this.score;

}










