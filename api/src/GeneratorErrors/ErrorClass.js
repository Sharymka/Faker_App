
class ErrorClass {

	 constructor(fakerIns, region, errors) {
		 this.errors = errors;
		 this.region = region;
		 this.faker = fakerIns;
	}

	 applyError(str) {
		this.modifiedStr = str;

		const errorsAmount = Math.floor(this.errors);
		const additionalError = this.errors - errorsAmount;

		for (let i = 0; i < errorsAmount; i++) {
			this.modifiedStr = this.chooseError(this.modifiedStr);
			// console.log(`${i} - ` + this.modifiedStr);
		}

		if (Math.random() <= additionalError) {
			this.modifiedStr = this.chooseError(this.modifiedStr);
		}

		return this.modifiedStr;
	}

	chooseError() {
		switch (this.faker.helpers.arrayElement( ['delete', 'insert', 'swap'])) {
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
			// console.log(`delete: длина равна 1 удалять нельзя !!!!! ` + this.modifiedStr);
			return this.chooseError();
		} else {
			// console.log(`delete: длина дольше 1 можно еще удалять ` + this.modifiedStr);
			const index = this.faker.number.int({ min: 0, max: this.modifiedStr.length - 1 });
			return this.modifiedStr.slice(0, index) + this.modifiedStr.slice(index + 1);
		}

	}

	addRandomChar() {
		if (this.modifiedStr.length >= 50) {
			// console.log(`add: длина уже слишком большая, добавлять нельзя!!!!! ` + this.modifiedStr);
			return this.chooseError();
		} else {
			// console.log(`add: длина меньше 50 добавить можно ` + this.modifiedStr);
			const index = this.faker.number.int({ min: 0, max: this.modifiedStr.length - 1 });
			const randomChar = this.getRandomChar();
			return this.modifiedStr.slice(0, index) + randomChar + this.modifiedStr.slice(index);
		}
	}

	 swapAdjacentChars() {
		if(this.modifiedStr.length < 2) {
			// console.log(`swap: длина меньше 2 менять нельзя!!!!  ` + this.modifiedStr);
			return this.chooseError();
		} else {
			// console.log(`swap: длина больше 2 можно менять ` + this.modifiedStr);
			const index = this.faker.number.int({ min: 0, max: this.modifiedStr.length - 2 });
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
		return alphabet.charAt(this.faker.number.int({ min: 0, max: alphabet.length - 1 }));
	}
}
module.exports = ErrorClass;

