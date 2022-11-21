const express = require('express');
const app = express();
const todoRoute = require('./routes/todoRoute');
const errorMiddleware = require('./middlewares/errorMiddleware');
const notFoundMiddleware = require('./middlewares/notFoundMiddleware');
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todos', todoRoute);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(port, () => console.log(`Server running on port ${port}`));
