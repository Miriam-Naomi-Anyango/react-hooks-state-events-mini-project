import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  function onTaskFormSubmit(newTask){
    const newTaskSubmit=[...tasks, newTask]
    setTasks(newTaskSubmit)
  }
  function handleDelete(task){
    let itemToDelete = task.target.previousSibling.textContent;
    const removeTask=tasks.filter((item)=>{
      return item.text !== itemToDelete;
    });
    setTasks(removeTask);
  }
  const [selectedCategory, setSelectedCategory]= useState("All");

  function handleCategoryChange(event){
    setSelectedCategory(event.target.textContent);
    event.target.classList.add("selected");
    let eventChildren = Array.from(event.target.parentNode.children);
    eventChildren.forEach((child)=>{
      if(child !== event.target){
        child.classList.remove("selected");
      }
    })
  }
  const tasksToDisplay = tasks.filter((task)=>{
    if (selectedCategory === "All"){
      return true
    }
    return text.category === selectedCategory
  })
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategoryChange={handleCategoryChange}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} categories={CATEGORIES} handleDelete={handleDelete} tasksToDisplay={tasksToDisplay} onTaskFormSubmit={onTaskFormSubmit}/>
    </div>
  );
}

export default App;
