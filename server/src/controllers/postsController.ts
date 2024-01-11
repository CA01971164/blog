import { Request, Response } from "express";
// 投稿を取得するための関数
export const getPosts = (req:Request, res:Response) => {
    // ここに投稿を取得するためのロジックを実装
    res.send('All Posts');
};

// 新しい投稿を作成するための関数
export const createPost = (req:Request, res:Response) => {
    // ここに投稿を作成するためのロジックを実装
    res.send('Post Created');
};
