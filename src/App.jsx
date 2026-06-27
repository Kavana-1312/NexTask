import React, { useEffect, useState } from 'react'
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import ProgressTracker from './Components/ProgressTracker'

export default function App() {
  const[tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }
  
  const updateTask = (updateTask, index) => {
    const newtasks = [...tasks];
    newtasks[index] = updateTask;
    setTasks(newtasks);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_ , i) => i!= index))
  }

  const clearTasks = () => {
    setTasks([]);
  }
  
  return (
    <div className="app">
      <h1>Nex Task</h1>
      <h4 className="subtitle">
        <i>The friendly task manager</i>
      </h4>

      <div classNAme="container">
        <Taskform addTask={addTask}/>
      </div>

      <div className="progress-card">
        <ProgressTracker tasks = {tasks}/>
      </div>

      <Tasklist tasks = {tasks}
      updateTask = {updateTask}
      deleteTask = {deleteTask}
      />

      {tasks.length>0 && (
        <button 
          onClick= {clearTasks}
          className='clear-btn'>
          Clear All Tasks 
        </button>
      )} 
    </div>
  )
}
