const express = require('express');
const notFoundMiddleware = require('./middlewares/notFoundMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');
const port = 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(port, () => console.log(`Server running on port ${port}`));
