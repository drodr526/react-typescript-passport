import mongoose from "mongoose";

const postSchema= new mongoose.Schema({
    title: String,
    content: String,
    category: String,
    author: String,
    date: String,
})

export default mongoose.model("Post", postSchema)