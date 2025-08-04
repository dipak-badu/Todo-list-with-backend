// Todo.jsx
import React, { useState, useEffect } from 'react';
import './Todo.css';
import TodoCard from './TodoCard';
import { RxCross1 } from "react-icons/rx";
import { ToastContainer, toast } from 'react-toastify';
import Update from './Update';
import axios from 'axios';
import { authActions } from '../../store';
import {useNavigate} from "react-router-dom";


function Todo() {
  const navigate = useNavigate( )
  const [input, setInput] = useState({ title: '', body: '' });
  const [todos, setTodos] = useState([]);
  const [showTextarea, setShowTextarea] = useState(false);
  const [updatedTodo, setTodoToUpdate]= useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async() => {
    if(input.title.trim()==="" && input.body.trim()===''){
       toast.error('Input fiels can not be empty.')
       return;
    }
   const token = sessionStorage.getItem('token');
   if(!token){
    toast.error("please sign in first to save task");
       navigate('/signup')
    
   }
   try {
    const res = await axios.post('http://localhost:3000/api/v1/todo/addTask', input, {
       headers: {
            Authorization: `Bearer ${token}`,
          },
    })
 setTodos((prev) => [res.data.todo, ...prev]);
      setInput({ title: '', body: '' });
      setShowTextarea(false);
      toast.success("Task is  added.")
     
   } catch (error) {
     toast.error("Failed to save task. Please try again.");
      console.error(err);
   }
  };

   useEffect(() => {
    const fetchTodos = async () => {
      const token = sessionStorage.getItem('token');
      if (!token) {
        alert("Please signsin first.");
        navigate('/signup')
        return;
      }

      try {
        const res = await axios.get('http://localhost:3000/api/v1/todo', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const formatedTodo = res.data.todos.map(todo=>({
          ...todo, 
          user:{
            _id: todo.user?._id,
            username: todo.user?.username
          }
        }))
        setTodos(formatedTodo);
      } catch (err) {
        const msg = err?.response?.data?.message || "Unauthorized or token expired.";
        toast.error(msg);
        console.error(msg);
      }
    };

    fetchTodos();
  }, []);

const del = async(_id)=>{
const token = sessionStorage.getItem('token');
if(!token){
  toast.error("Please signup first to delete task.")
  history('/signup');
  return;
}
console.log(`Delaeting id : ${_id}`)
  try {
    
    await axios.delete(`http://localhost:3000/api/v1/todo/${_id}`, {
      headers:{Authorization:`Bearer ${token}`}
    });

    setTodos((prev)=>prev.filter(todo => todo._id !== _id));
    toast.success('Task is deleted successfylly.')
  } catch (error) {
    toast.error("Failed to delete task.")
  }
}

const update = (_id) => {
  const found = todos.find(todo => todo._id === _id);
  console.log("✅ Found todo:", found); // should print the correct object
  setTodoToUpdate(found);
};

const handleUpdateSubmit = async(updatedTodo)=>{
  const token = sessionStorage.getItem('token')
  console.log("oure token" ,token)
if(!token){
  toast.error("Please signup first to delete task.")
  history('/signup');
  return;
}

try {
const res = await axios.patch(`http://localhost:3000/api/v1/todo/${updatedTodo._id}`,
{
  title:updatedTodo.title,
  body:updatedTodo.body
},{
  headers:{Authorization: `Bearer ${token}`}
}
);
setTodos(prev=>
  prev.map(todo=> todo._id === updatedTodo._id ? res.data.todo:todo)
)

toast.success("Task updated successfully!")
 hideUpadate()

setTodoToUpdate(null)
} catch (error) {
  const msg = error?.response?.data?.message || "Failed to update task.";
    console.error("Update error:", error);
    toast.error(msg);
}

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
                <TodoCard 
                title={todo.title} 
                body={todo.body} 
                _id ={todo._id} 
                 user = {todo.user._id}
                username = {todo.user.username}
                delId = {del}
                display={displayUpadate}
                toBeupdate = {update}
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
       <Update update={updatedTodo}  
       display={displayUpadate}
       onSubmit={handleUpdateSubmit}/>
       </div>
    </div>
    </>
  );
}

export default Todo;
