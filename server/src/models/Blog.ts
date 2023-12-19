import mongoose, { Document, Schema } from "mongoose";

interface IBlog extends Document {
  title: string;
  content: string;
  //他のフィールドを追加
}

const blogSchema = new Schema({
  title: { type: String, Required: true },
  content: { type: String, required: true },
  // 他のフィールドを追加
});

const Blog = mongoose.model<IBlog>(`Blog`, blogSchema);

export default Blog;
