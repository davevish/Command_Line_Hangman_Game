function Letters(letters) {
	this.letters = letters;
	if(this.letters == " "){
		this.show = true;
	}else{
		this.show = false;
	}
}

Letters.prototype.printInfo = function () {
	if(this.show){
		return this.letters + " ";
	}else{
		return "__ ";
	}
};

module.exports = {
	Letters
};