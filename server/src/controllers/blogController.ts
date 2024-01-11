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
  const { title, content } = req.body;

  try {
    const newBlog = new Blog({ title, content });
    const savedBlog = await newBlog.save();
    res.json(savedBlog);
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error` });
  }
};
