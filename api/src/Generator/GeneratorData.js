const { faker } = require('@faker-js/faker');

const {
	spanishPostalCodes ,
	spanishFullNames,
	spanishCities,
	spanishProvinces,
	spanishPhoneNumbers,
	spanishStreets
} = require('./repo/SpainRepo');

const {ukrainianFullNames,
	ukrainianRegions,
	ukrainianCities,
	ukrainianPhoneNumbers,
	ukrainianPostalCodes,
	ukrainianStreets
} = require('./repo/UkrainRepo');

 function generateUserData(region) {
	switch (region) {
		case 'ES':
			faker.locale = 'es';
			return {
				// number: faker.number.int({ min: 1, max: 1000 }),
				id: faker.string.uuid(),
				fullName: faker.helpers.arrayElement(spanishFullNames),
				address: generateAddress('ES'),
				phone: generatePhoneNumber('ES'),
			};
		case 'UK':
			faker.locale = 'uk';
			return {
				// number: faker.number.int({ min: 1, max: 1000 }),
				id: faker.string.uuid(),
				fullName: faker.helpers.arrayElement(ukrainianFullNames),
				address: generateAddress('UK'),
				phone: generatePhoneNumber('UK'),
			};
		case 'US':
			faker.locale = 'en_US';
			return {
				// number: faker.number.int({ min: 1, max: 1000 }),
				id: faker.string.uuid(),
				fullName: faker.person.fullName(),
				address: generateAddress('US'),
				phone: generatePhoneNumber('US'),
			};
		default:
			return null;
	}
}

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
	generateUserData
};
// export default generateUserData;


// Пример использования для разных стран
// const userES = generateUserData('ES');
// const userUK = generateUserData('UK');
// const userUS = generateUserData('US');
//
// console.log('Spain:', userES);
// console.log('Украiна:', userUK);
// console.log('USA:', userUS);
