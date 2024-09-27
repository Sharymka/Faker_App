const { faker } = require('@faker-js/faker');
const {config} = require("./config");

const { applyErrorsToString } = require("../GeneratorErrors/applyErrorsToRecord");
// const app = require("web/src/App");

function generateUserData(region, errorCount) {

	const regionConfig = config[region];

	if (!regionConfig) return null;

	faker.locale = regionConfig.locale;

	const errors = Math.round(errorCount/4 * 10)/10;

	const record =  {
		id:  applyErrorsToString(faker.string.uuid(), errors, region),
		fullName: regionConfig.fullNameArray
			? faker.helpers.arrayElement(regionConfig.fullNameArray)
			: faker.person.fullName(),
		address: regionConfig.generateAddress(),
		phone: regionConfig.generatePhoneNumber(),
	}


	const updatedRecord = {};

	Object.entries(record).forEach(([key, value]) => {
		updatedRecord[key] = applyErrorsToString(value, errors, region);
	})

	return updatedRecord;




	// return Object.fromEntries(
	// 	Object.entries(record).map(([key, value]) => [
	// 		key,
	// 		applyErrorsToString(value, errors, region) // Применяем функцию для изменения значений
	// 	])
	// );

	// const updatedRecord = {};

	// for (const [key, value] of Object.entries(record)) {
	// 	updatedRecord[key] = applyErrorsToString(value, errors, region);
	// }
}

module.exports = {
	generateUserData
};

const userES = generateUserData('ES', 700);
const userUK = generateUserData('UK', 1000);
const userUS = generateUserData('US', 5);

console.log('Spain:', userES);
console.log('Украiна:', userUK);
console.log('USA:', userUS);
