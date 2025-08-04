import React, { useState, useEffect } from 'react';

function Update({ display, update, onSubmit }) {
  const [formData, setFormData] = useState({ title: '', body: '' });

  // Populate initial form data from `update` prop
  useEffect(() => {
   console.log("🔍 Update prop received in Update.jsx:", update);
    if (update) {
      setFormData({
        title: update.title || '',
        body: update.body || ''
      });
    }
  }, [update]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.title.trim() || !formData.body.trim()) {
      alert("Both fields are required.");
      return;
    }

    onSubmit({ ...formData, _id: update._id }); // Pass back updated todo with _id
    display(); // Close the update form
  };

  return (
    <div>
      <div className='todo-main container'>
        <div className='input-wrapper update-input-wrapper'>
          <input
            type='text'
            name='title'
            placeholder='Title*'
            value={formData.title}
            onChange={handleChange}
            className='input-field'
          />
          <textarea
            name='body'
            placeholder='Body*'
            value={formData.body}
            onChange={handleChange}
            className='input-field textarea'
          />
        </div>
        <div className='add-btn'>
          <button className='btn btn-success' onClick={handleSubmit}>Update</button>
        </div>
      </div>
    </div>
  );
}

export default Update;
