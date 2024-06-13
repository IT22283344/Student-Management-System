const router = require("express").Router();
let student = require("../models/student");


http://Localhost:8070/student/signup
router.route("/signup").post((req,res)=>{
    const uname = req.body.name;
    const email = Number(req.body.age);
    const password = req.body.gender;
   




    const newstudent = new student({
        name,
        age,
        gender,
        address,
        tel


    });

    newstudent.save().then(()=>{
        res.json("Student Added.")
    }).catch((err)=>{
        console.log(err);
    });

});