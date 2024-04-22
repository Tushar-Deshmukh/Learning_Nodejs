//import the model of todo
const Todo = require("../models/Todo");

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete({ _id: id });

        res.status(200).json({
            success: true,
            message: "Deleted successfully!"
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
};

module.exports = { deleteTodo };