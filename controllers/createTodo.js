//import the model of todo
const Todo = require("../models/Todo");

//define route handler
const createTodo = async (req, res) => {
    try {
        //extract title and description from request body
        const { title, description } = req.body;
        console.log("This function called")

        //create a new todo object abnd insert into DB
        const newTodo = await Todo.create({ title, description })

        //send json response with success flag
        res.status(200).json({
            success: true,
            status: 201,
            data: newTodo,
            message: "Entry created successfully"
        });


    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            status: 500,
            data: "Internal Server Error",
            message: error.message,
        })
    }
}

module.exports = { createTodo };