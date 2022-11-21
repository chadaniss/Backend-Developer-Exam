const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

router
  .route('/')
  .get(todoController.getAllTodos)
  .post(todoController.createNewTodo);

router
  .route('/:id')
  .delete(todoController.deleteTodoById)
  .put(todoController.updateTodoById);

module.exports = router;
