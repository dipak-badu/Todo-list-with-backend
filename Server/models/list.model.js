const mongoose = require('mongoose')
const listSChema = new mongoose.Schema({
   title: {
    type:String,
    required: ture
   } ,
   body: {
     type:String,
    required: ture
   },
    user: {
        type:mongoose.type.ObjectId,
         ref: "User"
      }
},{timestamps:true})

module.exports = mongoose.model("List", ListSChema)