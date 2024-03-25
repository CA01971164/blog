import express from "express";
import {
  getBlogs,
  // createBlog,
  getBlogPost,
} from "../controllers/blogController";

const router = express.Router();

// すべてのブログポストを取得
router.get("/", getBlogs);
// 新しいブログポストを作成
// router.post("/", createBlog);
// 特定のブログポストでIDを取得
router.get("/:id", getBlogPost);

export default router;
