const Models = require('../models');

export async function createUser(data) {
	try {
		await Models.User.create(data);
	} catch (error) {
		console.log("AAAHHHHH")
		throw error;
	}
}

