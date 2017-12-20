var Word = require('./words.js');
var prompt = require('prompt');

console.log("Welcome to Hangman!");
console.log("Guess the car manufacturer!");
console.log("---------------");
prompt.start();



game = {
	wordBank: ['mclaren', 'ferrari', 'astonmartin', 'skoda', 'fisker', 'lamborghini', 'porsche', 'ford', 'tatamotors'],
	wordsWon: 0,
	guessesRemaining: 5,
	currentWrd: null,

	startGame: function (wrd) {
		this.resetGuesses();
		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
		this.currentWrd.getLet();
		this.promptUser();
	},

	resetGuesses: function(){
		this.guessesRemaining = 10;
	},

	promptUser: function(){
		var self = this;
		prompt.get(['guessLet'], function(err, result){
			console.log("You guessed: " + result.guessLet);
			var manyGuessed = self.currentWrd.checkLetter(result.guessLet);

			if(manyGuessed ==0) {
				console.log("Wrong, Try Again");
				self.guessesRemaining--;

			} else {
				console.log("Correct! Keep Going!");
				if(self.currentWrd.findWord()){
					console.log("You won!");
					console.log("-------------------");
					return;
				}
			}

			console.log("Guesses remaining: " + self.guessesRemaining);
			console.log("-------------------");
			if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
				self.promptUser();
			}
			else if(self.guessesRemaining ==0){
				console.log("You lost!. The correct word was ", self.currentWrd.target);
			} else {
				console.log(self.currentWrd.wordRender());
			}
		});
	}
};

game.startGame();