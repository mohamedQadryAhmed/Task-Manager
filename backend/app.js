const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const tasks = require('./src/routes/tasks.js');
const connectDB = require('./src/config/db.js');
const errorHandler = require('./src/middleware/errorHandler.js');

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

connectDB();

app.use(cors('localhost:5173', { credentials: true }));
app.use(express.json());

app.use('/api/v1/tasks', tasks);

// Not Found Middleware
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
    message: 'The requested endpoint does not exist',
  });
});

// Error Handling Middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
