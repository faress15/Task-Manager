import './TaskList.css'
import { Task } from '../Task/Task';

export function TaskList({ tasks }) {
    return (
      <div className="task-list">
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    );
  }