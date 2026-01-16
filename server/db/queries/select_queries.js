const { get } = require('../../app');
const Models = require('../models');

export async function getUserByEmail(email) {
	try {
		return await Models.User.findOne({ where: { email: email } });
	} catch (error) {
		throw error;
	}
}
