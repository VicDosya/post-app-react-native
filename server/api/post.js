import express from "express";
const app = express();

//Import schemas
import Post from "../models/Post.js";

/**
 * This API sends to the user all posts from database.
 * @route GET /api/posts
 * @returns {object} 200 - Returns an object that contains all posts
 * @returns {object} 500 - Returns an object that contains an error that states something went wrong.
 */
app.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    if (!posts) {
      return res.status(404).send({ error: "No posts found." });
    }
    res.status(200).send(posts);
  } catch (err) {
    res
      .status(500)
      .send({ error: "Something went wrong with the posts system." });
  }
});

/**
 * This API sends to the user a post from database.
 * @route GET /api/posts/:id
 * @returns {object} 200 - Returns an object that contains all posts
 * @returns {object} 500 - Returns an object that contains an error that states something went wrong.
 */
app.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).send({ error: "Post not found." });
    }
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send({ error: "Something went wrong..." });
  }
});

/**
 * This API stores user's post data to the database.
 * @route POST /api/posts
 * @param {string} body.title.required - Title of the post.
 * @param {string} body.description.required - Description of the post.
 * @param {string} body.author.required - Author of the post.
 * @returns {object} 200 - Returns an object that contains all posts
 * @returns {object} 400 - Returns an object that contains an error when input fields are empty.
 * @returns {object} 500 - Returns an object that contains an error that states something went wrong.
 */
app.post("/", async (req, res) => {
  if (!req.body.title || !req.body.description || !req.body.author) {
    return res.status(400).send({ error: "Please fill in all the fields." });
  }
  try {
    const post = new Post({
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
    });
    await post.save();
    res.status(200).send({ message: "Post submitted!" });
  } catch (err) {
    res.status(500).send({ error: "Something went wrong." });
  }
});

/**
 * This API updates user's post data to the database UPON EDITING.
 * @route PUT /api/posts/:postId
 * @param {string} body.title.required - Title of the post.
 * @param {string} body.description.required - Description of the post.
 * @param {string} body.author.required - Author of the post.
 * @returns {object} 200 - Returns an object that contains all posts
 * @returns {object} 400 - Returns an object that contains an error when input fields are empty.
 * @returns {object} 404 - Returns an object that contains an error when post is not found
 * @returns {object} 500 - Returns an object that contains an error that states something went wrong.
 */
app.put("/:postId", async (req, res) => {
  if (!req.body.title || !req.body.description || !req.body.author) {
    return res.status(400).send({ error: "Please fill in all the fields." });
  }
  try {
    const post = await Post.findOne({
      _id: req.params.postId,
    });
    if (!post) {
      return res.status(404).send({ error: "Post not found." });
    }
    post.title = req.body.title;
    post.description = req.body.description;
    post.author = req.body.author;
    await post.save();
    res.status(200).send({ message: "Post edit submitted!" });
  } catch (err) {
    res.status(500).send({ error: "Something went wrong." });
  }
});

/**
 * This API delets user's post from the database
 * @route DELETE /api/posts/:postId
 * @returns {object} 200 - Deletes the post from the database and sends an object with a message.
 * @returns {object} 404 - Returns an object that contains an error when post is not found
 * @returns {object} 500 - Returns an object that contains an error that states something went wrong.
 */
app.delete("/:postId", async (req, res) => {
  const post = await Post.findOne({
    _id: req.params.postId,
  });
  if (!post) {
    return res.status(404).send({ error: "Post not found." });
  }
  try {
    await post.deleteOne({
      _id: req.params.postId,
    });
    res.status(200).send({ message: "Post has been deleted." });
  } catch (err) {
    res
      .status(500)
      .send({ error: "Something went wrong with deleting the post." });
  }
});

export default app;
