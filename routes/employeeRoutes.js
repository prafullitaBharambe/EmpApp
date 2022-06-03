const express = require("express");
const create=require("../controller/employeeController");
const read=require("../controller/employeeController");
const update =require("../controller/employeeController");
const del=require("../controller/employeeController");
//const readbyid=require("../controller/employeeController");
//const Controller=require("../controller/employeeController")
const bodyParser = require("body-parser");
var router = express();

router.use(bodyParser.json())

//by using named exports
router.post("/create", create.create);

router.get("/users",read.read);

router.put('/update/:id',update.update);

router.delete('/del/:id',del.deleteEmp);

//router.get('',readbyid.readById)


// // by using data binding concept
// router.post("/create", Controller.create);

// router.get("/users",Controller.read);

module.exports = router;
