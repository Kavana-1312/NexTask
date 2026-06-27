import React from 'react'

export default function Progresstracker({ tasks}) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
  return (
    <>
      <h2>Your Progress</h2>

      <h3>{Math.round(progress)}%</h3>

      <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${progress}%` }}
          ></div>
      </div>

      <div className="stats">

        <div className="box">
          <h2>{totalTasks}</h2>
          <p>Completed</p>
        </div>

        <div className="box">
          <h2>{totalTasks - completedTasks}</h2>
          <p>Remaining</p>
        </div>
        
      </div>
    </>
  )
}