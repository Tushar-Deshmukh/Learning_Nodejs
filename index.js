const express = require("express");
const app = express();

//load config from env
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for Todo API
const todoRoutes = require("./routes/todos");

//mount the todo API routes
app.use("/api/v1", todoRoutes);


//start the server
app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
});

//connect to db
const dbConnect = require("./config/db");
dbConnect();

//default route
app.get("/", (req, res) => {
    res.send("<h1>This is HomePage</h1>")
});