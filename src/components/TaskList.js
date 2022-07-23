import React from "react";
import Task from "./Task";


function TaskList({tasksToDisplay, handleDelete}) {

  return (
    <div className="tasks" task={tasksToDisplay}>
      {tasksToDisplay.map((task)=>(
        <Task 
        key={task.text}
        text={task.text}
        handleDelete={handleDelete}
        category={task.category}
        />
      ))}
    </div>
  );
}

export default TaskList;
