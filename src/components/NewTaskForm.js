import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const options=categories.map((category)=>{
    return <option key={category}>{category}</option>
  })
const [details, setDetails] = useState("")
function handleDetails(event){
  setDetails(event.target.value);
}
const [newCategory, setNewCategory] = useState("All");

function handleNewCategory(event){
  setNewCategory(event.target.value);
}
function handleSubmit(event){
  event.preventDefault();
  const newTask = {
    text:details,
    category: newCategory,
  };
  onTaskFormSubmit(newTask);
}
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        onChange={handleDetails}
        value= {details}
        />
        
      </label>
      <label>
        Category
        <select name="category" onChange={handleNewCategory}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
