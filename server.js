const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Cars").then(() => {
    console.log("Connection successfull")
}).catch((error) => {
    console.log("error connecting to DB!", error)
})

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello");
});

app.post("/api/cars", (req, res) => {
    const { name, brand } = req.body;
    console.log(req.body);

    res.send("successfull");

});

app.listen(3000, () => {
    console.log("server started at port 3000");
});