// Todo.jsx
import React, { useState, useEffect } from 'react';
import './Todo.css';
import TodoCard from './TodoCard';

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
    }
  };

  useEffect(() => {
    console.log('Updated Todos:', todos);
  }, [todos]);

  return (
    <div className='todo'>
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
                <TodoCard title={todo.title} body={todo.body} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
