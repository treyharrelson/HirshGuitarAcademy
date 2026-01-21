const query = require('../queries');

async function getPosts() {
	try {
		const posts = await query.SELECT.getAllPosts();
		console.log(posts);
	} catch (error) {
		throw error;
	}
}

getPosts();