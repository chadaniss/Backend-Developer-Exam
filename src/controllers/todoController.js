const { readTodo } = require('../dbs/file');

exports.getAllTodos = async (req, res, next) => {
  try {
    const foundTodos = await readTodo();
    res.status(200).json({ total: foundTodos.length, todos: foundTodos });
  } catch (err) {
    next(err);
  }
};
