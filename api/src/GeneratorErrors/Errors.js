

function applyRandomError(str, region) {
	const mutations = ['delete', 'insert', 'swap'];
	const mutation = mutations[Math.floor(Math.random() * mutations.length)];

	switch (mutation) {
		case 'delete':
			return deleteRandomChar(str, region);
		case 'insert':
			return addRandomChar(str, region);
		case 'swap':
			return swapAdjacentChars(str, region);
		default:
			return str;
	}
}
function deleteRandomChar(str, region) {
	if (str.length <= 1) {
		return applyRandomError(str, region);
	} else {
		const index = Math.floor(Math.random() * str.length);
		return str.slice(0, index) + str.slice(index + 1);
	}

}

function addRandomChar(str, region) {
	if (str.length >= 50) {
		return applyRandomError(str, region);
	} else {
		const index = Math.floor(Math.random() * str.length);
		const randomChar = getRandomChar(region);
		return str.slice(0, index) + randomChar + str.slice(index);
	}
}

function swapAdjacentChars(str, region) {

	if(str.length < 2) {
		return applyRandomError(str, region);
	} else {
		const index = Math.floor(Math.random() * (str.length - 1));
		return (
			str.slice(0, index) + str[index + 1] + str[index] + str.slice(index + 2)
		);
	}
}

function getRandomChar(region) {
	const alphabets = {
		ES: 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789_-&%*@',
		EN: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-&%*@',
		UK: 'абвгґдеєжзийіїклмнопрстуфхцчшщьюяАБВГҐДЕЄЖЗИЙІЇКЛМНОПРСТУФХЦЧШЩЬЮЯ0123456789_-&%*@'
	};
	const alphabet = alphabets[region] || alphabets['EN'];
	return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}


module.exports = {
	applyRandomError
}