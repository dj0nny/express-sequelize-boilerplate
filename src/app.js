const express = require('express');

const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

/* Express setup */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Express middlewares setup */
app.use(errorMiddleware);

/* Express routes setup */
app.get('/', (req, res) => {
	res.send('🎆');
});

// app.use();

module.exports = app;
