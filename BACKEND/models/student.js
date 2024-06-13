const mongoose = require('mongoose');
const scheema = mongoose.Schema;

const studentscheema = new scheema({
    name:{
        type :String,
        required:true,
    },
    age:{
        type :Number,
        required:true,
    },
    gender:{
        type :String,
        required:true,
    },
    address:{
        type :String,
        required:true,
    },
    tel:{
        type :String,
        required:true,
    }
    
})

const userregistration =new scheema({
    username:{
        type : String
    },
    password:{
        type : String
    },
    email:{
        type : String
    }
})

const Student = mongoose.model("Student",studentscheema);
const user = mongoose.model("user",userregistration);
module.exports = Student;