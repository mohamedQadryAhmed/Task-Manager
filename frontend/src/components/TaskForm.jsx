import { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAddTask({ name });
    setName('');
  };
  return (
    <form
      className='task-form'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Enter the task'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default TaskForm;
