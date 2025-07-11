const mongoose = require('mongoose')
const userSChema = new mongoose.Schema({
   email: {
    type:String,
    required: ture
   } ,
   username: {
     type:String,
    
   },
   password: {
     type:String,
    required: ture
   },
   list: {
     type:mongoose.type.ObjectId,
      ref: "List"
   }
},{timestamps:true})

module.exports = mongoose.model("User", ListSChema)