const express = require('express');
const faker = require('@faker-js/faker');
const path = require('path');

const {generateUserData} = require('./src/Generator/GeneratorData');

const app = express();
const port = 3001;
const api = express.Router();
app.use('/api', api);
api.use(express.json());


app.use(express.static(path.join(__dirname, 'build')));

api.get('/generate', (req, res) => {
	// return res.status(200).json({message: 'Generate'});
	const { region } = req.query;
	const count = 20;

	const users = [];
	for (let i = 0; i < count; i++) {
		users.push(generateUserData(region));
	}
	 res.json(users);
});

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
