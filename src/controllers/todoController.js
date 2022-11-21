const { readTodo, writeTodo } = require('../dbs/file');
const { validateTodo } = require('../utils/validator');
const { v4: uuidv4 } = require('uuid');

exports.getAllTodos = async (req, res, next) => {
  try {
    const foundTodos = await readTodo();
    res.status(200).json({ total: foundTodos.length, todos: foundTodos });
  } catch (err) {
    next(err);
  }
};

exports.createNewTodo = async (req, res, next) => {
  try {
    const { title, completed = false } = req.body;
    validateTodo(title, completed);
    const newTodo = { id: uuidv4(), title, completed };
    const allTodos = await readTodo();
    allTodos.unshift(newTodo);
    await writeTodo(allTodos);
    res.status(201).json({ todo: newTodo });
  } catch (err) {
    next(err);
  }
};

exports.deleteTodoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldAllTodos = await readTodo();
    const newAllTodos = oldAllTodos.filter((item) => item.id !== id);
    await writeTodo(newAllTodos);
    res.status(200).json({ message: 'success delete todo' });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
