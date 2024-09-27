const {faker} = require("@faker-js/faker");
const {
	spanishProvinces,
	spanishCities,
	spanishStreets,
	spanishPostalCodes
} = require("./repo/SpainRepo");
const {
	ukrainianRegions,
	ukrainianCities,
	ukrainianStreets,
	ukrainianPostalCodes
} = require("./repo/UkrainRepo");

function generateAddress(region) {
	switch (region) {
		case 'ES':
			return faker.helpers.arrayElement([
				`${faker.helpers.arrayElement(spanishProvinces)}, c. ${faker.helpers.arrayElement(spanishCities)}, st. ${faker.helpers.arrayElement(spanishStreets)}, b. ${faker.number.int({ min: 1, max: 105 })}, ${faker.helpers.arrayElement(spanishPostalCodes)}`,
				`${faker.helpers.arrayElement(spanishCities)}, st. ${faker.helpers.arrayElement(spanishStreets)}, b. ${faker.number.int({ min: 1, max: 105 })}, flat. ${faker.location.secondaryAddress()}`,
				`${faker.helpers.arrayElement(spanishCities)}, st. ${faker.location.streetAddress(true)}`,
				`${faker.helpers.arrayElement(spanishProvinces)}, c.${faker.helpers.arrayElement(spanishCities)}, ${faker.location.streetAddress({ useFullAddress: true })}`,
			]);
		case 'UK':
			return faker.helpers.arrayElement([
				`р-он ${faker.helpers.arrayElement(ukrainianRegions)}, г. ${faker.helpers.arrayElement(ukrainianCities)}, ул. ${faker.helpers.arrayElement(ukrainianStreets)}, д. ${faker.number.int({ min: 1, max: 105 })}, ${faker.helpers.arrayElement(ukrainianPostalCodes)}`,
				`${faker.helpers.arrayElement(ukrainianCities)}, ул. ${faker.helpers.arrayElement(ukrainianStreets)}, д. ${faker.number.int({ min: 1, max: 105 }) + "/" + faker.number.int({ min: 1, max: 12 } )}, кв. ${faker.number.int({ min: 1, max: 100 })}`,
			]);
		case 'US':
			return faker.helpers.arrayElement([
				`${faker.location.state()}, c. ${faker.location.city()}, st. ${faker.location.street()}, b. ${faker.number.int({ min: 1, max: 105 })},zip code:${faker.location.zipCode()}`,
				`${faker.location.city()}, st. ${faker.location.street()}, b. ${faker.number.int({ min: 1, max: 105 })}, flat. ${faker.location.secondaryAddress()}`,
				`${faker.location.city()}, st. ${faker.location.streetAddress(true)}`,
				`${faker.location.city()}, ${faker.location.streetAddress({ useFullAddress: true })}`,
			]);



		default:
			return '';
	}
}

module.exports = {
	generateAddress
}