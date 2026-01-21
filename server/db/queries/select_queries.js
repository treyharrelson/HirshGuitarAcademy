const { get } = require('../../app');
const Models = require('../models');

async function getUserByEmail(email) {
	try {
		return await Models.User.findOne({ where: { email: email } });
	} catch (error) {
		throw error;
	}
}

async function getAllPosts() {
	try {
		return await Models.Post.findAll();
	} catch (error) {
		throw error;
	}
}

async function getAllPostsPage(limit, offset) {
	try {
		return await Models.Post.findAndCountAll({
			limit: limit,
			offset: offset,
			order: [['datePosted', 'DESC']],
		});
	} catch (error) {
		throw error;
	}
}

module.exports = {
	getUserByEmail,
	getAllPosts,
	getAllPostsPage,
};