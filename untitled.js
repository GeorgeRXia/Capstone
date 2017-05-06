
var p = document.getElementsByTagName("option")[0];

p.addEventListener("blur", function(){
console.log("typing");
})


var arrayRightAnswer = ["HOBBIT WITH LEGS", "HEY OGGIE", "USE GITHUB"];
var arrayClue = ["Little Guys with hairy feet", "Favorite TA", "Number one lesson"];
var randomWordIndex;
var rightAnswer;
var clue;
var results = document.getElementsByClassName("result")[0];

startGame();


document.addEventListener("keypress", function(){
	var recentGuess = "";
	recentGuess = event.key.toUpperCase();

	checkAnswer(recentGuess);
		
});

var guessValues = "";
function startGame(){	
	randomWordIndex = parseInt(Math.round(Math.random()*2));
	rightAnswer = arrayRightAnswer[randomWordIndex];

	clue = document.getElementsByClassName("clue")[0];
	clue.innerHTML = arrayClue[randomWordIndex];

	guessValues = "";
	for (var i = 0; i<rightAnswer.length; i++){
		if(rightAnswer.charAt(i) === " "){	
			var tile = document.createElement("div");
			tile.className = "tileSpace " + "tile"+i;
			tile.innerHTML += " ";
			results.appendChild(tile);

		}else {
			var tile = document.createElement("div");
			tile.className = "tile " + "tile"+i;
			tile.innerHTML += "";
			results.appendChild(tile);
		
		}

	}
}

var totalGuessAmount = 0;
function checkAnswer(recentGuess){
	if(guessValues.includes(recentGuess)){
		
	
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
			fillInMissingLetter.innerHTML = " ";			
		}

	}
	var stateOfTheGame = currentStateOfWord();

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
var restartGameModal = document.getElementsByClassName("outer-modal")[0];
function isGameOver(number, hidden){
	if(hidden === rightAnswer ){
		
		gameIsOver.innerHTML = "You Win! Play Again?"
		
		gameOverOpition();


	} else if(number < 5){
		chancesLeft =  5 - number;

		gameOver.innerHTML = chancesLeft + " Chances Left";

	

	}else{
		
		
		gameIsOver.innerHTML = "Game Over. Play Again?";
		
		gameOverOpition();

	}

}
var gameIsOver = document.getElementsByClassName("game-over")[1];
function gameOverOpition(){
	restartGameModal.style.display = "block";
	
	var reset = document.createElement("button");
	var text = document.createTextNode("Yes");
	reset.appendChild(text);
	gameIsOver.append(reset);
	reset.addEventListener("click", restartGame);
}

function restartGame(){
	results.innerHTML = " ";
	startGame();
	checkAnswer();
	restartGameModal.style.display = "none";

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
	if(guessValues === "undefined"){
		wordBank.innerHTML = " ";

	}else{
		wordBank.innerHTML = guessValues;
	}

}

function Player(name){
	this.name = name;
	this.score;

}










