function applyErrorsToString(str, errorCount, region) {
	let modifiedRecord = str;

	const errorsAmount = Math.floor(errorCount);

	const remainder = errorCount - errorsAmount;

	for (let i = 0; i < errorsAmount; i++) {
		modifiedRecord = applyRandomMutation(modifiedRecord, region);

		// console.log(`${i + 1} -`+ modifiedRecord + '\n');
	}

	if (Math.random() <= remainder) {
		modifiedRecord = applyRandomMutation(modifiedRecord, region);
		// console.log(`additional error -`+ modifiedRecord);
	}

	return modifiedRecord;
}

function applyRandomMutation(str, region) {
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

// Пример для функций удаления, добавления и перестановки символов
function deleteRandomChar(str, region) {
	// console.log(`deleteChar -`+ str);
	if (str.length <= 1) {
		// console.log('delete forbidden: длина оказалась равной 1 - ' + str);
		return applyRandomMutation(str, region);
		// return str;
	} else {
		// console.log('delete: длина еще больше 1 - ' + str);
		const index = Math.floor(Math.random() * str.length);
		return str.slice(0, index) + str.slice(index + 1);
	}

}

function addRandomChar(str, region) {
	// console.log(`addRandomChar -`+ str);
	if (str.length >= 50) {
		// console.log('add forbidden: длина уже слишком большая чтобы добавлять 50 и более -' + str);
		// applyRandomMutation(str, region);
		return applyRandomMutation(str, region);
	} else {
		// console.log('add: длина меньше 50 все хорошо - ' + str);
		const index = Math.floor(Math.random() * str.length);
		const randomChar = getRandomChar(region);
		// console.log("randomChar " + randomChar)
		return str.slice(0, index) + randomChar + str.slice(index);
	}

}

function swapAdjacentChars(str, region) {
	// console.log(`swapAdjacentChars -`+ str);
	if(str.length < 2) {
		// console.log(' swap forbidden:  длина меньше 2 и мы уже не можем поменять местами символы - ' + str);
		return applyRandomMutation(str, region);
		// return str;
	} else {
		// console.log('swap: длина еще больше 2 или равная - ' + str);
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

// Пример использования
// const record = "ab";
// const errorCount = 2.5;  // Количество ошибок на запись
// const region = 'en';     // Регион для генерации случайных символов
//
// const result = applyErrorsToString(record, errorCount, region);
// console.log(result);

module.exports = {
	applyErrorsToString
}