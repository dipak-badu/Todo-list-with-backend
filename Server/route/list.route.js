const router = require('express').Router();
const ExpressError = require('../utils/ExpressError')
const wrapAsync = require('../utils/wrapAsync')
const User = require('../models/user.model')
const Todo = require('../models/list.model')
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwtSecret = process.env.JWT_SECRET
const requireAuth = require('../utils/authmiddleware')

router.use(requireAuth);

// add todo
router.post('/addTask', wrapAsync(async(req, res)=>{
const { title, body} = req.body

if(!title || !body){
    throw new ExpressError("Title and Body are required!!", 400)
}
const newTodo  = new Todo({
    title, 
    body,
    user:req.user_id,
})
await newTodo.save();

res.status(201).json({
    message: "Todo created successfully!!", todo: newTodo
})
}))

// get all todos 
router.get('/', wrapAsync(async(req, res)=>{
    const todos   = await Todo.find()
    res.json({todos}).populate('user', 'username')
}))

// delete a todo 
router.delete("/:id",wrapAsync(async(req, res)=>{
    let {id} = req.params;
    if(!id){
        throw new ExpressError('no id Found', 404);

    }
  let  delteTodo = await Todo.findByIdAndDelete(id)
  if(!delteTodo){
 throw new ExpressError('Todo not found!!', 404);

  }
  res.status(201).json({
    message:"Todo Deleted!!", todo : delteTodo
  })
}))

// edit Todo 
router.patch("/:id",wrapAsync(async(req, res)=>{
    let {id} = req.params;
    const {title, body} = req.body;
    if(!id){
        throw new ExpressError('no id Found', 404);

    }
  let  editTodo = await Todo.findByIdAndUpdate(id,
   {title, body},{
    new:true,
    runValidators:true
   }
  )
  if(!editTodo){
 throw new ExpressError('Todo not found!!', 404);

  }
  res.status(201).json({
    message:"Todo updated successfylly!!", todo : editTodo
  })
}))
module.exports = router;