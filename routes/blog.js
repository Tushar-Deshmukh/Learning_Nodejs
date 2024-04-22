const express = require("express");
const router = express.Router();

//import controllers
const { createComment } = require("../controllers/CommentController");
const { createPost, getAllPosts } = require("../controllers/PostController");

//define routes and its controllers
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts)

module.exports = router;