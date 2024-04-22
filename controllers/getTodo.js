//import the model of todo
const Todo = require("../models/Todo");

const getTodo = async (req, res) => {
    try {
        //fetch all todo items from DB
        const todos = await Todo.find({});

        //response
        res.status(200).json({
            success: true,
            status: 200,
            data: todos,
            message: "Entire to do data is fetched"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            status: 500,
            error: error.message,
            message: "server errror"
        })
    }
}


const getTodoById = async (req, res) => {
    try {
        //extract to do item on the basis of id
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id });

        //if data for given id is not 
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: 'Data not found'
            })
        }

        //data for given id is found

        if (todo) {
            return res.status(200).json({
                success: true,
                data: todo,
                message: "Data found successfully!"
            })
        }


    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            status: 500,
            error: error.message,
            message: "server errror"
        })
    }
}

module.exports = {
    getTodo,
    getTodoById
};