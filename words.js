var Letters = require("./letters.js");

var Word = function(currentWord) {
	this.chances = 5;
	this.currentWord = currentWord;
	this.letters = [];
	this.guesses = [];

	for (var i = 0; i < this.currentWord.length, i++){
		this.letters.push(new Letters.Letters(this.currentWord[i]));
	}
};

Word.prototype.checkLetters = function (letters) {
	this.wrong = true;
	this.alreadyGuessed = false;
	var letter = letters.toLowerCase();

	if (this.guesses.indexOf(letters ! = -1){
		this.alreadyGuessed = true;
	}else{
		this.alreadyGuessed.push(letters);
		for(var i = 0; i < this.letters.length; i++){
			if(this.letters[i].letters.toLowerCase() == letters){
				this.wrong = false;
				this.letters[i].show = true;
			}
		}
		if (this.wrong){
			this.chances --;
		}
	}
};

Word.prototype.print = function () {
	var output = "";
	for(var i = 0; i < this.letters.length; i++){
		output =+ this.letters[i].printInfo();
	}
	return output;
};

module.exports ={
	Word
};