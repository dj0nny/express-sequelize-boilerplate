const Todo = require('../models/todo.model');

const getAllTodo = async (req, res, next) => {
	try {
		const todoList = await Todo.findAll();

		res.status(200).json({
			todoList,
		});
	} catch (error) {
		res.status(400);
		next(error);
	}
};
const getTodo = async (req, res, next) => {
	try {
		const { todoId } = req.params;

		const todo = await Todo.findByPk(todoId);

		res.status(200).json({
			todo,
		});
	} catch (error) {
		res.status(400);
		next(error);
	}
};
const createTodo = async (req, res, next) => {
	try {
		const { name, description } = req.body;

		if (!name) throw new Error("Todo's name must be defined!");

		const newTodo = await Todo.create({
			name,
			description,
		});

		res.status(200).json({
			newTodo,
		});
	} catch (error) {
		res.status(400);
		next(error);
	}
};
const updateTodo = async (req, res, next) => {
	try {
		const { name, description } = req.body;
		const { todoId } = req.params;

		if (!name) throw new Error("Todo's name must be defined!");

		const updatedTodo = await Todo.update(
			{
				name,
				description,
			},
			{
				where: {
					id: todoId,
				},
			}
		);

		res.status(200).json({
			updatedTodo,
		});
	} catch (error) {
		res.status(400);
		next(error);
	}
};
const deleteTodo = async (req, res, next) => {
	try {
		const { todoId } = req.params;

		const deletedTodo = await Todo.destroy({
			where: {
				id: parseInt(todoId),
			},
		});

		res.status(200).json({
			deletedTodo,
		});
	} catch (error) {
		res.status(400);
		next(error);
	}
};

module.exports = {
	getAllTodo,
	getTodo,
	createTodo,
	updateTodo,
	deleteTodo,
};
