import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaPencilAlt } from 'react-icons/fa';

const TaskCard = ({ task, onToggle, onDelete, onEdit }) => {
  return (
    <div className='task-item'>
      <div>
        <span
          style={
            task.complete ? { display: 'inline-block' } : { display: 'none' }
          }
        >
          ✔
        </span>
        <h3
          className={task.complete ? 'completed' : ''}
          onClick={() => onToggle(task._id)}
        >
          {task.name}
        </h3>
      </div>
      <div>
        <button
          className='btn edit'
          onClick={() => onEdit(task._id)}
        >
          <FaPencilAlt />
        </button>
        <button
          className='btn delete'
          onClick={() => onDelete(task._id)}
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
