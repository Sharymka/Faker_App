const { faker } = require('@faker-js/faker');
const {config} = require("./config");

const { applyErrorsToString } = require("../GeneratorErrors/applyErrorsToString");

function generateUserData(region, errorCount) {

	const regionConfig = config[region];

	if (!regionConfig) return null;

	faker.locale = regionConfig.locale;

	const errors = Math.round(errorCount/4 * 10)/10;

	const record =  {
		// id:  faker.string.uuid(),
		id: faker.string.uuid(),
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
