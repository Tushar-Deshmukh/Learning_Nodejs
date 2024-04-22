const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

const createComment = async (req, res) => {
    try {
        //fetch data from request body
        const { post, user, body } = req.body;

        //create a comment object
        const comment = new Comment({
            post, user, body
        });

        //save the new comment into the database
        const savedComment = await comment.save();

        //find the post by Id , add new comment to its comment array
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true }).populate("comments").exec(); // populate the comments array with comment documents

        res.json({
            post: updatedPost,
        })

    } catch (error) {
        return res.status(500).json({
            error: 'Error While creating comment'
        })
    }
}

module.exports = { createComment };