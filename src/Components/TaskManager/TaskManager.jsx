import React, { useState } from 'react';
import './TaskManager.css'
import { Header } from '../Header/Header'
import { AddTask } from '../AddTask/addTask'
import { TaskList } from '../TaskList/TaskList'
import { FilterTasks } from '../FilterTasks/FilterTasks';
import { TaskModal } from '../TaskModal/TaskModal';

export function TaskManager(){
    const [tasks, setTasks] = useState([
        { id: 1, title: "Buy groceries", description: "Milk, Bread, Eggs", status: "Pending" },
        { id: 2, title: "Clean the house", description: "Living room and kitchen", status: "Completed" }
      ]);
      const [filter, setFilter] = useState("All");
      const [showModal, setShowModal] = useState(false);
      const [newTask, setNewTask] = useState({ title: "", description: "", status: "Pending" });
    
      // Add new task
      const handleAddTask = () => {
        setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
        setNewTask({ title: "", description: "", status: "Pending" });
        setShowModal(false);
      };

    const filteredTasks = tasks.filter(task => filter === "All" || task.status === filter);


    return <div className="task-manager">
        <Header/>
        <AddTask setShowModal={setShowModal}/>
        {showModal && (
        <TaskModal
          newTask={newTask}
          setNewTask={setNewTask}
          handleAddTask={handleAddTask}
          onClose={() => setShowModal(false)}
        />
      )};
        <FilterTasks filter={filter} setFilter={setFilter}/>
        <TaskList tasks={filteredTasks} />
    </div>
}