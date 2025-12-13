const express = require('express');
const dotenv = require('dotenv');
const tasks = require('./src/routes/tasks.js');

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

app.use('/api/v1/tasks', tasks);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
