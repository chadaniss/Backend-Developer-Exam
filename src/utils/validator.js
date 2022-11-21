const { ValidationError } = require('./error');

exports.validateTodo = (title, completed) => {
  if (!title || !title.trim()) {
    throw new ValidationError('title is required');
  }

  if (typeof completed !== 'boolean') {
    throw new ValidationError('completed must be a boolean');
  }
};
