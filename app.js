const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use("/", (req, res, next) => {
  // console.log(req.params.id)

  res.status(200).send({ message: "Sample response" });
  console.log("after response");
  next();
  console.log("after next");
});

app.use("/", (req, res) => {
  console.log("Second Log");

  // res.status(200).send({message: "Sample response"})
  console.log("Second after response");
});

app.listen(3000, () => {
  console.log("Listning on port 3000");
});
