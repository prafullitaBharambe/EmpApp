const Emp = require("../model/employee");
const mongoose = require("mongoose");

function create(req, res) {
  let employeeName = req.body.empName;
  let employeeEmail = req.body.empEmail;
  let employeeMobile = req.body.empMobile;

  let objEmp = new Emp({
    empName: employeeName,
    empEmail: employeeEmail,
    empMobile: employeeMobile,
  });

  //if column name in schema and request parameter is same we can create object like below
  //   let objEmp = new Emp({
  //     empName,
  //     empEmail,
  //     empMobile,
  //   });

  objEmp
    .save()
    .then((data) => res.send(data))
    .catch((err) => console.log("Error" + err));
}

function read(req, res) {
  Emp.find({}).then((data) => res.send(data)).catch((err)=>console.log(err));
}

// function readById(req,res){
//    // Emp.findById({id:req.body.id})
//    Emp.findOne({_id:req.body.id})
// }

function update(req,res){
    Emp.findByIdAndUpdate(req.params.id,req.body,(err,emp)=>{
        if(err){
            return res.status(500).send({
                Message:"not able to update employee details",
                error:err
            })
        }
        res.status(200).send({
            Message:"Successfully updated Employee details"
        })
    })
}
function deleteEmp(req,res){
    Emp.findByIdAndDelete(req.params.id,(err,emp)=>{
        if(err){
            return res.status(500).send({
                Message:"not able to delete employee details",
                error:err
            })
        }
        res.status(200).send({
            Message:"Successfully deleted Employee details"
        })
    })
}
//named export
module.exports.create = create;
module.exports.read = read;
module.exports.update=update;
module.exports.deleteEmp=deleteEmp;
//module.exports.readById = readById;

// module.exports={create,read};
