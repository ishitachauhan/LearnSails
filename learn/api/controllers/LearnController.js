a/**
 * LearnController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */






module.exports = {
    list:function(req,res){
        return res.send(req.query.name)
    },
    list2: function(req, res) {
        return res.send("yup")
     },
    list3: function(req, res) {
    return res.send("deleted")
    },
    list4: function(req,res){
        
        Student.find().then(data => {
            return res.send(data)
        })
        
    },

    createStudent1: function(req, res) {

        Student.create({
            name: "ishita",
            rollNo: "1",
            marks: "100"
        }).then(data => {
            return res.send("created")
        })

    },

    createStudent2: function(req,res){
        var values = req.allParams();
        
        Student.create({
            name: values.name.toUpperCase(),
            rollNo: values.rollNo,
            marks: values.marks
        })
            .then(function(data,values){
                return res.send("created")
            })
    },
    
    createStudent3: function(req,res){
        // 1. stored all the requested params in variable value
        var values = req.allParams();
        let roll_number = values.rollNo
        
        // 2. .find will search the rollno entered by user 
        Student.find({
            name: "pk"
        })
        .then(function(data){ 
            console.log(data)
            if(data){
                res.status(400);
                return res.json({'status':'rollNo. already exists'})
            } else {
                Student.create(values)
                    .then(function(data) {
                        res.ok("created");
                    })
                    .catch(function(err){
                        res.status(400);
                        return res.json({'status':'cannot create user'})
                    })
            }

        }).catch()
    },

    createStudent: function(req,res){
        // 1. stored all the requested params in variable value
        var values = req.allParams();
        let roll_number = values.rollNo
        
        // 2. .find will search the rollno entered by user 
        Student.find({
            rollNo:roll_number
        })
        .then(function(data){ 
            //3
            if(data.length != 0){
                console.log(data)//4
                res.status(400);
                return res.json({'status':'rollNo. already exists'})
            } else {
                //4
                Student.create(values)
                    .then(function(data) {
                        //5
                        res.ok("created");
                    })
                    .catch(function(err){
                        //5
                        res.status(400);
                        return res.json({'status':'cannot create user'})
                    })
            }

        })
    },
    readDevice: function(req,res){
        DeviceType.find().then(data => {
            return res.send(data)

        })
    },
    createDevice: function(req,res)  {
       
        let values = req.allParams();
        let device_Type =values.deviceType
        let driver_Type = values.driverType
        let driver_Name = values.driverName
        let par_ams = values.params
        let communication_Type =values.communicationType
        
        DeviceType.create({
            deviceType: device_Type,
            driverType: driver_Type,
            driverName: driver_Name,
            params: par_ams,
            communicationType: communication_Type
            

        }).then(data=>{
            return res.send("created")
        })
    }  
};



