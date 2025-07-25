import React from 'react'
import './Todo.css'
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from 'react-router-dom';
function TodoCard({title , body ,id , delId , display}) {
  return (
    <div className='todo-card p-3 '>
     <div>
      <h5 className='t-title'>{title} </h5>
      <p className='todo-card-p'>{body.split("", 20)}...</p>
     </div>
    <div className='d-flex justify-content-between align-items-end mt-1 fs-4 '> 
    <div onClick={()=>display()}>  <CiEdit className='card-icon edit p-1'/></div>
   <div onClick={()=>delId(id)}> < MdDeleteOutline className='card-icon del p-1'/></div>
     </div>
    </div>
  )
}

export default TodoCard
