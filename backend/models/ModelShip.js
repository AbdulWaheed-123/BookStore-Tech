const mongoose=require("mongoose")
const shipschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Ship",shipschema);