const router = require('express').Router();
const ExpressError = require('../utils/ExpressError')
const wrapAsync = require('../utils/wrapAsync')
const User = require('../models/user.model')
const Todo = require('../models/list.model')
const jwt = require('jsonwebtoken');
const Joi = require('joi');


const requireAuth = require('../utils/authmiddleware')

router.use(requireAuth);

// add todo
router.post('/addTask', requireAuth, wrapAsync(async(req, res)=>{
const { title, body} = req.body

if(!title || !body){
    throw new ExpressError("Title and Body are required!!", 400)
}
const newTodo  = new Todo({
    title, 
    body,
    user:req.user._id,
})
await newTodo.save();

res.status(201).json({
    message: "Todo created successfully!!", todo: newTodo
})
}))

// get all todos 
router.get('/',  requireAuth,  wrapAsync(async(req, res)=>{
   const todos = await Todo.find().populate('user', 'username').sort({createdAt:-1 });
   if(!todos){
    throw new ExpressError("No todos found!! ", 404)
   }

res.status(200).json({ todos });

}))

// delete a todo 
router.delete("/:id", requireAuth, wrapAsync(async(req, res)=>{
    let {id} = req.params;
    if(!id){
        throw new ExpressError('no id Found', 404);

    } 
    // check ownership do later 
//     if (req.user._id.toString() !== Todo.user.toString()) {
//   throw new ExpressError("Unauthorized: Not your todo", 403);
// }
  let  delteTodo = await Todo.findByIdAndDelete(id)
  if(!delteTodo){
 throw new ExpressError('Todo not found!!', 404);

  }
  res.status(201).json({
    message:"Todo Deleted!!", todo : delteTodo
  })
}))

// edit Todo 
router.patch("/:id", requireAuth, wrapAsync(async(req, res)=>{
    let {id} = req.params;
    const {title, body} = req.body;
    if(!id){
        throw new ExpressError('no id Found', 404);

    }

//        if (req.user._id.toString() !== Todo.user.toString()) {
//   throw new ExpressError("Unauthorized: Not your todo", 403);
// }
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