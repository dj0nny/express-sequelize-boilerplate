const express = require('express');

const errorMiddleware = require('./middlewares/error.middleware');

const app = express();
const apiRoute = require('./routes');

/* Express setup */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Express middlewares setup */
app.use(errorMiddleware);

/* Express routes setup */
app.get('/', (req, res) => {
	res.send('🎆');
});

app.use('/api', apiRoute);

module.exports = app;
