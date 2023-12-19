"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBlog = exports.getBlogs = void 0;
const Blog_1 = __importDefault(require("../models/Blog"));
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog_1.default.find();
        res.json(blogs);
    }
    catch (error) {
        res.status(500).json({ error: `Internal Server Error` });
    }
};
exports.getBlogs = getBlogs;
const createBlog = async (req, res) => {
    const [title, content] = req.body;
    try {
        const newBlog = new Blog_1.default({ title, content });
        const savedBlog = await newBlog.save();
        res.json(savedBlog);
    }
    catch (error) {
        res.status(500).json({ error: `Internal Server Error` });
    }
};
exports.createBlog = createBlog;
