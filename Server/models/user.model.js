const mongoose = require('mongoose')
const userSChema = new mongoose.Schema({
   email: {
    type:String,
    required: true,
     unique: true
   } ,
   username: {
     type:String,
      unique: true
    
   },
   password: {
     type:String,
    required: true
   },
   list:[ {
     type:mongoose.Types.ObjectId,
      ref: "List"
   }]
},{timestamps:true})

module.exports = mongoose.model("User", userSChema)