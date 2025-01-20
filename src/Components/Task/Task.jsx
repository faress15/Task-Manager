import './Task.css'

export function Task({ task }) {
    return (
      <div className="task">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <span>Status: {task.status}</span>
      </div>
    );
  }