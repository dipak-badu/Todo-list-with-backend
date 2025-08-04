import React from 'react'

function Update({update}) {
  return (
    
      <div>
         <div className='todo-main container'>
        <div className='input-wrapper update-input-wrpper'>
          <input
            type='text'
            name='title'
            placeholder='Title*'
           value={update.title}
           
            className='input-field'
          />

          
            <textarea
              name='body'
              placeholder='Body*'
              value={update.body}
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
