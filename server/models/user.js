import mongoose from "mongoose";
//import mongoose from "mongoose";
//defining schema
const userSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    email:{type:String, required:true, trim:true},
    password:{type:String, required:true, trim:true},
    tc:{type:Boolean, required:true, trim:true}
})

//model
const userModel = mongoose.model("user", userSchema)

export default userModel