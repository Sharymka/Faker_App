const seedrandom = require('seedrandom');

class ErrorClass {

	 constructor(region, errors, seed) {
		 this.seed = seed;
		 this.errors = errors;
		 this.region = region;
		 this.rng = this._setRandomSeed(seed);
	}
	_setRandomSeed() {
		return seedrandom(this.seed);
	}

	applyError(str) {
		this.modifiedStr = str;

		const errorsAmount = Math.floor(this.errors);
		const additionalError = this.errors - errorsAmount;

		for (let i = 0; i < errorsAmount; i++) {
			this._setRandomSeed(`${this.seed}${i}`);
			this.modifiedStr = this.chooseError(this.modifiedStr);
		}

		if (Math.random() <= additionalError) {
			this.modifiedStr = this.chooseError(this.modifiedStr);
		}

		return this.modifiedStr;
	}

	chooseError() {

		const errorsType = ['delete', 'insert', 'swap'];
		switch (errorsType[Math.floor(this.rng () * errorsType.length)]) {
			case 'delete':
				return this.deleteRandomChar();
			case 'insert':
				return this.addRandomChar();
			case 'swap':
				return this.swapAdjacentChars();
			default:
				return this.modifiedStr;
		}
	}

	deleteRandomChar() {
		if (this.modifiedStr.length <= 1) {
			return this.chooseError();
		} else {
			const index = Math.floor(this.rng() * this.modifiedStr.length);
			return this.modifiedStr.slice(0, index) + this.modifiedStr.slice(index + 1);
		}

	}

	addRandomChar() {
		if (this.modifiedStr.length >= 70) {
			return this.chooseError();
		} else {
			const index = Math.floor(this.rng() * this.modifiedStr.length);
			const randomChar = this.getRandomChar();
			return this.modifiedStr.slice(0, index) + randomChar + this.modifiedStr.slice(index);
		}
	}

	 swapAdjacentChars() {
		if(this.modifiedStr.length < 2) {
			return this.chooseError();
		} else {
			const index = Math.floor(this.rng() * (this.modifiedStr.length - 1));
			return (
				this.modifiedStr.slice(0, index) + this.modifiedStr[index + 1] + this.modifiedStr[index] + this.modifiedStr.slice(index + 2)
			);
		}
	}
	getRandomChar() {
		const alphabets = {
			ES: 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789_-&%*@',
			EN: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-&%*@',
			UK: 'абвгґдеєжзийіїклмнопрстуфхцчшщьюяАБВГҐДЕЄЖЗИЙІЇКЛМНОПРСТУФХЦЧШЩЬЮЯ0123456789_-&%*@'
		};
		const alphabet = alphabets[this.region] || alphabets['EN'];
		return alphabet.charAt(Math.floor(this.rng() * this.modifiedStr.length));
	}
}
module.exports = ErrorClass;
