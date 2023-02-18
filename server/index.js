//Import packages
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//Import routes
import apiPostRoutes from "./api/post.js";

//Database connectivity
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

//Variables
const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/posts", apiPostRoutes);

//Running the server
app.listen(3000, () => {
  console.log("🚀 Server running on port 3000.");
});
