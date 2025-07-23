// Todo.jsx
import React, { useState, useEffect } from 'react';
import './Todo.css';
import TodoCard from './TodoCard';
import { RxCross1 } from "react-icons/rx";
import { ToastContainer, toast } from 'react-toastify';
import Update from './Update';



function Todo() {
  const [input, setInput] = useState({ title: '', body: '' });
  const [todos, setTodos] = useState([]);
  const [showTextarea, setShowTextarea] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (input.title.trim()) {
     
      setTodos((prev) => [...prev, input]);
      setInput({ title: '', body: '' });
      setShowTextarea(false);
      toast.success("Task is  added")
      toast.error("Task is added but not saved please signup first")

    }
  };

  useEffect(() => {
    console.log('Updated Todos:', todos);
  }, [todos]);

const del = (id)=>{
console.log(id)
todos.splice(id , '1')
 setTodos((prev) => [...prev]);
 toast.success("Task is deleted")


}

const displayUpadate =()=>{
  document.querySelector("#todo-update").style.display="block";
}

const hideUpadate =()=>{
  document.querySelector("#todo-update").style.display="none";
}

  return (
    <>
    <div className='todo'>
      <ToastContainer/>
      <div className='todo-main container'>
        <div className='input-wrapper'>
          <input
            type='text'
            name='title'
            placeholder='Title*'
            value={input.title}
            onChange={handleChange}
            onFocus={() => setShowTextarea(true)}
            className='input-field'
          />

          {showTextarea && (
            <textarea
              name='body'
              placeholder='Body*'
              value={input.body}
              onChange={handleChange}
              className='input-field textarea'
            />
          )}
        </div>

        <div className='add-btn'>
          <button className='btn btn-primary' onClick={handleSubmit}>Add</button>
        </div>

        <div className='todo-body container-fluid'>
          <div className='row'>
            {todos.map((todo, idx) => (
              <div className='col-lg-4 col-md-6 col-sm-12 mb-3' key={idx}>
                <TodoCard title={todo.title} body={todo.body} id = {idx}
                delId = {del}
                display={displayUpadate}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="todo-update" id='todo-update' >
       <div className='d-flex justify-content-end align-items-end px-2 py-2  cross-update' onClick={hideUpadate} > <RxCross1/> </div>
       <div className="container d-flex justify-content-center align-items-center flex-column mt-4 ">
         <h1 >Update task</h1>
       <Update title={input.title} body={input.body} />
       </div>
    </div>
    </>
  );
}

export default Todo;
