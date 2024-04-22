//import the model of todo
const Todo = require("../models/Todo");

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const todo = await Todo.findByIdAndUpdate({ _id: id }, { title, description, updatedAt: Date.now() });

        res.status(200).json({
            success: true,
            data: todo,
            message: "Updated Successfully!"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            status: 500,
            data: "Internal Server Error",
            message: error.message,
        })
    }
};

module.exports = { updateTodo };