const mongoose = require('mongoose')
const listSChema = new mongoose.Schema({
   title: {
    type:String,
    required: true,
       trim : true
   } ,
   body: {
     type:String,
    required: true,
    trim : true
   },
   completed: {
    type: Boolean,
    default: false
  },
    user: {
        type:mongoose.Types.ObjectId,
         ref: "User",
         required: true
      }
},{timestamps:true})

module.exports = mongoose.model("List", listSChema)