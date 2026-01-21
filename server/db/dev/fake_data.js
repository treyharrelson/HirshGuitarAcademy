const Models = require('../models');
const { faker } = require('@faker-js/faker');
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

async function makeFakeUsers(numUsers) {
	try {
		for (i = 0; i < numUsers; i++) {
			await Models.User.create({
				firstName: faker.person.firstName(),
				lastName: faker.person.lastName(),
				email: Math.random() + faker.internet.email(),
				password: faker.internet.password(),
				userName: faker.internet.username(),
				role: 'student',
			})
		}
	}
	catch (error) {
		throw error;
	}
}

async function makeFakePosts(numPosts) {
	try {
		users = await Models.User.findAll({ where: { role: 'student' } });
		console.log(users);
		for (i = 0; i < numPosts; i++) {
			const randomUser = users[Math.floor(Math.random() * users.length)];
			await Models.Post.create({
				title: faker.lorem.sentence(),
				content: faker.lorem.paragraphs(2),
				userId: randomUser.id,
				likes: Math.floor(Math.random() * 100),
			})
		}
	}
	catch (error) {
		throw error;
	}
}

async function consolestuff() {
	rl.question('1 for fake users, 2 for fake posts, 3 to quit: ', (answer) => {
		if (answer === '3') {
			rl.close();
			process.exit(1);
		}
		else if (answer === '1') {
			rl.question('How many fake users to create? ', async (num) => {
				await makeFakeUsers(parseInt(num));
				console.log(`Created ${num} fake users.`);
				consolestuff();
			});
		} else if (answer === '2') {
			rl.question('How many fake posts to create? ', async (num) => {
				await makeFakePosts(parseInt(num));
				console.log(`Created ${num} fake posts.`);
				consolestuff();
			});
		}
	});
}

consolestuff();