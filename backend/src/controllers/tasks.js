const Task = require('../models/Task.js');
const asyncWrapper = require('../middleware/asyncWrapper.js');

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ success: true, count: tasks.length, tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const { name, complete } = req.body;
  const task = await Task.create({ name, complete });
  res.status(201).json({ success: true, task });
});

const getTask = asyncWrapper(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    return res.status(404).json({ success: false, error: 'Task not found' });
  }
  res.status(200).json({ success: true, task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ success: false, error: 'Task not found' });
  }
  res.status(200).json({ success: true, task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) {
    return res.status(404).json({ success: false, error: 'Task not found' });
  }
  res.status(200).json({ success: true, task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
