const express = require('express');
const faker = require('@faker-js/faker');
const path = require('path');

const app = express();
const port = 3001;
const api = express.Router();
app.use('/api', api);
api.use(express.json());


app.use(express.static(path.join(__dirname, 'build')));

const generateFakeUser = (region) => {
	// Настройка языка и региона
	switch (region) {
		case 'US':
			faker.locale = 'en_US';
			break;
		case 'PL':
			faker.locale = 'pl';
			break;
		case 'UZ':
			faker.locale = 'ru'; // Узбекский данных нет, можно использовать русские
			break;
		default:
			faker.locale = 'en';
	}

	return {
		id: faker.datatype.uuid(),
		fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
		address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}`,
		phone: faker.phone.phoneNumber(),
	};
};

// Маршрут для получения данных
api.get('/generate', (req, res) => {
	return res.status(200).json({message: 'Generate'});
	// const { region = 'US', count = 20 } = req.query;
	//
	// const users = [];
	// for (let i = 0; i < count; i++) {
	// 	users.push(generateFakeUser(region));
	// }
	//
	// res.json(users);
});

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
