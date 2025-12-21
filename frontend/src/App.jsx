import { useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import { useState } from 'react';
import TaskCard from './components/TaskCard';
import UpdateTaskForm from './components/UpdateTaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const toggleUpdateForm = async (id) => {
    await getTask(id);
    setShowUpdateForm(true);
  };

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5500/api/v1/tasks');
    const data = await res.json();
    setTasks(data.tasks);
  };

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5500/api/v1/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5500/api/v1/tasks/${id}`, {
      method: 'DELETE',
    });
    fetchTasks();
  };

  const getTask = async (id) => {
    const res = await fetch(`http://localhost:5500/api/v1/tasks/${id}`);
    const data = await res.json();
    setTask(data.task);
  };

  useEffect(() => {
    fetchTasks();
  }, [showUpdateForm]);

  return (
    <div className='container'>
      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      {showUpdateForm && (
        <UpdateTaskForm
          task={task}
          onClose={() => setShowUpdateForm(false)}
        />
      )}
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onDelete={deleteTask}
          onEdit={toggleUpdateForm}
        />
      ))}
    </div>
  );
}

export default App;
