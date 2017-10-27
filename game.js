var inquirer = require("./inquirer");

var wordsToGuess = ["sky", "pail", "pickle", "cloth", "slip", "pin", "basin", "wrist", "sense", "town", "book", "hill", "food", "event,", "nation", "soda", "apparatus", "waste", "bone", "friends"];

function pickWord(){
	var randomNumber = Math.floor(Math.random()*wordsToGuess.length);
	randomNumber -= 1;
	var currentWord = wordsToGuess[randomNumber];

	module.exports.currentWord = currentWord;

}

module.exports = {
	pickWord
};
