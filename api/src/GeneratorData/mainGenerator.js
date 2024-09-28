
const {config} = require("./config");
const { applyErrorsToString } = require("../GeneratorErrors/applyErrorsToString");
const {faker} = require('@faker-js/faker');

function generateUserData(region, errors, seed ) {

	const regionConfig = config[region];

	if (!regionConfig) return null;

	faker.seed(parseInt(seed));

	faker.locale = regionConfig.locale;

	const errorsCount = Math.round(errors/4 * 10)/10;

	const recordsNumber = 20;

	const records = []

	for (let i = 0; i < recordsNumber; i++) {
		records.push({
			id: applyErrorsToString(faker.string.uuid(), errorsCount, region, faker),
			fullName: regionConfig.fullNameArray
					? applyErrorsToString(faker.helpers.arrayElement(regionConfig.fullNameArray), errorsCount, region, faker)
					: applyErrorsToString(faker.person.fullName(), errorsCount, region, faker),
			address: applyErrorsToString(regionConfig.generateAddress(), errorsCount, region, faker),
			phone: applyErrorsToString(regionConfig.generatePhoneNumber(), errorsCount, region, faker),
		})
	}
	return records;
}

module.exports = {
	generateUserData
};

// const userES = generateUserData('ES', 700);
// const userUK = generateUserData('UK', 1000);
// const userUS = generateUserData('US', 5);
//
// console.log('Spain:', userES);
// console.log('Украiна:', userUK);
// console.log('USA:', userUS);
