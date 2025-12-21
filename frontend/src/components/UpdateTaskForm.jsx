import { useState } from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';

const UpdateTaskForm = ({ task, onClose }) => {
  const [taskName, setTaskName] = useState(task.name);
  const [isCompleted, setIsCompleted] = useState(task.complete);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5500/api/v1/tasks/${task._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: taskName, complete: isCompleted }),
    });
    onClose();
  };

  return (
    <div className='update-form'>
      <button
        className='close-btn'
        onClick={onClose}
      >
        <HiOutlineXMark size={24} />
      </button>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task Name</label>{' '}
          <input
            type='text'
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>

        <div>
          <label>Task Completed</label>
          <input
            type='checkbox'
            name='completed'
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
        </div>

        <button type='submit'>Update Task</button>
      </form>
    </div>
  );
};

export default UpdateTaskForm;
