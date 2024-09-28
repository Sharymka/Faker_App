

function applyRandomError(str, region, faker) {
	const mutations = ['delete', 'insert', 'swap'];
	const mutation = faker.helpers.arrayElement(mutations);

	// const mutation = mutations[Math.floor(Math.random() * mutations.length)];

	switch (mutation) {
		case 'delete':
			return deleteRandomChar(str, region, faker);
		case 'insert':
			return addRandomChar(str, region, faker);
		case 'swap':
			return swapAdjacentChars(str, region, faker);
		default:
			return str;
	}
}
function deleteRandomChar(str, region, faker) {
	if (str.length <= 1) {
		return applyRandomError(str, region, faker);
	} else {
		// const index = Math.floor(Math.random() * str.length);
		const index = faker.number.int({ min: 0, max: str.length - 1 });
		return str.slice(0, index) + str.slice(index + 1);
	}

}

function addRandomChar(str, region, faker) {
	if (str.length >= 50) {
		return applyRandomError(str, region, faker);
	} else {
		// const index = Math.floor(Math.random() * str.length);

		const index = faker.number.int({ min: 0, max: str.length - 1 });
		const randomChar = getRandomChar(region, faker);
		return str.slice(0, index) + randomChar + str.slice(index);
	}
}

function swapAdjacentChars(str, region, faker) {

	if(str.length < 2) {
		return applyRandomError(str, region, faker);
	} else {
		// const index = Math.floor(Math.random() * (str.length - 1));
		const index = faker.number.int({ min: 0, max: str.length - 2 });
		return (
			str.slice(0, index) + str[index + 1] + str[index] + str.slice(index + 2)
		);
	}
}

function getRandomChar(region, faker) {
	const alphabets = {
		ES: 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789_-&%*@',
		EN: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-&%*@',
		UK: 'абвгґдеєжзийіїклмнопрстуфхцчшщьюяАБВГҐДЕЄЖЗИЙІЇКЛМНОПРСТУФХЦЧШЩЬЮЯ0123456789_-&%*@'
	};
	const alphabet = alphabets[region] || alphabets['EN'];
	// return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
	return alphabet.charAt(faker.number.int({ min: 0, max: alphabet.length - 1 }));
}


module.exports = {
	applyRandomError
}