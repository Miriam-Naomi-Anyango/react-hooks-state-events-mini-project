import React from "react";

function CategoryFilter({categories, handleCategoryChange}) {
const categoryButtons= categories.map((category)=>{
  return(
    <button key={category} onClick={handleCategoryChange}>{category}</button>
  )
})
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
