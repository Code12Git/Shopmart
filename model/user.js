import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        trim:true,
        required:true,
        min:5,
        max:22

    },
    lastname:{
        type:String,
        trim:true,
        required:true
    },
    username:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        index:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    date:{
        type:Date
    }
})

const User=mongoose.model('user',userSchema)

export default User;