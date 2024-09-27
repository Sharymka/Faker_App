const {faker} = require("@faker-js/faker");
const {spanishPhoneNumbers} = require("./repo/SpainRepo");
const {ukrainianPhoneNumbers} = require("./repo/UkrainRepo");

function generatePhoneNumber(region) {
	switch (region) {
		case 'ES':
			return faker.helpers.arrayElement([
				faker.helpers.arrayElement(spanishPhoneNumbers)
			]);
		case 'UK':
			return faker.helpers.arrayElement([
				faker.helpers.arrayElement(ukrainianPhoneNumbers)
			]);
		case 'US':
			return faker.helpers.arrayElement([
				faker.phone.number('(###) ###-####'),
				faker.phone.number('###-###-####')
			]);
		default:
			return '';
	}
}

module.exports = {
	generatePhoneNumber
}