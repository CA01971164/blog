import { Request, Response } from "express";
import Blog from "../models/Blog";

export const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error` });
  }
};

export const createBlog = async (req: Request, res: Response) => {
  const { title, summary, fullText } = req.body;

  try {
    const newBlog = new Blog({ title, summary, fullText });
    const savedBlog = await newBlog.save();
    res.json(savedBlog);
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error` });
  }
};

export const getBlogPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const blogPost = await Blog.findById(id);

    if (!blogPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog post", error });
  }
};
