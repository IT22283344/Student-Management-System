//student add to the database

const router = require("express").Router();
let student = require("../models/student");


http://Localhost:8070/student/add
router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const address = req.body.address;
    const tel = req.body.tel;




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


//Data retriviwe

router.route("/").get((req,res)=>{
    student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err);
    })

});



//update
http://Localhost:8070/student/update/jdjsf87dfhh
router.route("/update/:id").put(async(req,res)=>{
    let userID = req.params.id;
    const{name,age,gender,address,tel}= req.body;

    const updatestudent = {
        name,
        age,
        gender,
        address,
        tel,
    }

    const update = await student.findByIdAndUpdate(userID,updatestudent).then(()=>{
        res.status(200).send({status:"User Updated"}).catch((err)=>{
            console.log(err);
            res.status(500).send({status:"Error with updating data!!"});
        })

    })
    

});

//DELETE
http://Localhost:8070/student/delete/jjsslj54ds
router.route("/delete/:id").delete(async(req,res)=>{
    let userID = req.params.id;
    
    await student.findByIdAndDelete(userID).then(()=>{
        res.status(200).send({status:"Student Deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with update student!!"});
    })


});

router.route("/get/:id").get(async(req,res)=>{
    let userID = req.params.id;

    const user = await student.findById(userID).then((student)=>{
        res.status(200).send({status:"User fetched",student})
    }).catch(()=>{
        console.log(err);
        res.status(500).send({status:"Error with get user"});

    })
});


module.exports = router;
