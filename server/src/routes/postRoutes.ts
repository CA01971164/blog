import express from "express";
import { getPosts, createPost } from "../controllers/postsController";

const router = express.Router();

// GETリクエスト: /posts で全ての投稿を取得
router.get("/", getPosts);

// POSTリクエスト: /posts で新しい投稿を作成
router.post("/", createPost);

export default router;
