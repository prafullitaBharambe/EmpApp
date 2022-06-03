const express = require("express");
const mongoose = require("mongoose");
const router=require("./routes/employeeRoutes")

const app = express();

const apiPort = 5000;

app.use('/emp',router);

app.get("/user", (req, res) => {
  res.send("First API Call!");
});

const mongodburl =
  "mongodb+srv://prafullitaPatil:urvee@cluster0.hcla2ac.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongodburl)
  .then((res) => {
    console.log("DB Connected "+res);
  })
  .catch((err) => {
    console.log("Error connecting DB " + err);
  });

app.listen(apiPort, () => console.log(`Server running on port : ${apiPort}`));
