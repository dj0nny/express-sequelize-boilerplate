const dotenv = require('dotenv');

const app = require('./app');

dotenv.config();

const port = process.env.PORT || 8050;

app.listen(port, () => {
	try {
		console.log(`🚀 Server's listening at: http://localhost:${port}.`);
	} catch (error) {
		console.error(`An error occurred: ${error}`);
	}
});
