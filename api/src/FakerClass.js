const { fakerES, faker} = require('@faker-js/faker');
const { fakerUK } = require('@faker-js/faker');
const { fakerEN_US } = require('@faker-js/faker');

class FakerClass {

	 constructor(region) {
		this.region = region;
		this.faker = this._get();
	}

	_get() {
		switch (this.region) {
			case 'ES':
				return fakerES;
			case 'UK':
				return fakerUK;
			case 'EN':
				return fakerEN_US;
			default:
				throw new Error(`Unsupported region: ${this.region}`);
		}
	}

	setSeed(seed) {
		 this.faker.seed(seed);
	}

	_generateAddress() {
		return this.faker.helpers.arrayElement([
			`${this.faker.location.city()}, ${this.faker.location.street()}, ${this.faker.location.buildingNumber()}, ${this.faker.location.secondaryAddress()}, ${this.faker.location.zipCode()} `,
			`${this.faker.location.state()}, ${this.faker.location.city()}, ${this.faker.location.streetAddress(true)}`,
			`${this.faker.location.state()}, ${this.faker.location.city()}, ${this.faker.location.streetAddress({ useFullAddress: true })}`
		])
	};

	_generatePhoneNumber() {
		return this.faker.helpers.arrayElement([
			`${this.faker.phone.number({ style: 'human' })}`,
			`${this.faker.phone.number({ style: 'national' })}`,
			`${this.faker.phone.number({ style: 'international' })}`,
		])
	};

	generateUserData() {
		return {
			id: this.faker.string.uuid(),
			fullName: this.faker.person.fullName(),
			address: this._generateAddress(),
			phone: this._generatePhoneNumber(),
		};
	}
}
module.exports = FakerClass;


