export function TaskModal({ newTask, setNewTask, handleAddTask, onClose }) {
    return (
      <div className="modal">
        <div className="modal-content">
          <h2>Add New Task</h2>
          <label>Title:</label>
          <input
            type="text"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <label>Description:</label>
          <input
            type="text"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          />
          <label>Status:</label>
          <select
            value={newTask.status}
            onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
          <div className="modal-actions">
            <button onClick={handleAddTask}>Add</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }