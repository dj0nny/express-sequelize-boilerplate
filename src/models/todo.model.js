const { DataTypes } = require('sequelize');

const sequelize = require('../sequelize');

const Todo = sequelize.define('Todo', {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: true,
	},
});

module.exports = Todo;
