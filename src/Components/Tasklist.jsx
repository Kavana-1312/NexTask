import React from 'react'

export default function TaskList({tasks, updateTask, deleteTask}) {
    const toggleComplete = (index)=>{
        const updatedTask = {...tasks[index], completed: !tasks[index].completed};
        updateTask(updatedTask, index);
    }
  return (
    <ul className="task-list">
        {tasks.map((task, index)=>(
            <div className="task-buttons">
                <button onClick={() => toggleComplete(index)}>
                    {task.completed ? "Undo" : "Complete"}
                </button>

                <button onClick={() => deleteTask(index)}>
                    Delete
                </button>
            </div>
        ))}
    </ul>
  )
}