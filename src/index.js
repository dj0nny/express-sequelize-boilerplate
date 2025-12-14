const dotenv = require('dotenv');

const app = require('./app');
const sequelize = require('./sequelize');

dotenv.config();

const port = process.env.PORT || 8050;

app.listen(port, async () => {
	try {
		console.log(`🚀 Server's listening at: http://localhost:${port}.`);
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error(`An error occurred: ${error}`);
	}
});
