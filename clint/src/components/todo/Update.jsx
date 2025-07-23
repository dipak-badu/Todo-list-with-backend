import React from 'react'

function Update({title, body}) {
  return (
    
      <div>
         <div className='todo-main container'>
        <div className='input-wrapper update-input-wrpper'>
          <input
            type='text'
            name='title'
            placeholder='Title*'
           value={title}
           
            className='input-field'
          />

          
            <textarea
              name='body'
              placeholder='Body*'
              value={title}
              className='input-field textarea'
            />
          
        </div>
        <div className='add-btn'>
          <button className='btn btn-success' >Update</button>
        </div>
      </div>
    </div>
  )
}

export default Update
