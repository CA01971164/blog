import mongoose, { Document } from "mongoose";

interface IBlogPost extends Document {
  title: string;
  summary: string;
  fullText: string;
}

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  fullText: { type: String, required: true },
});

const Blog = mongoose.model<IBlogPost>("Blog", blogPostSchema);

export default Blog;
