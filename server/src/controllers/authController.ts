import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";

export const register = async (req: Request, res: Response) => {
  try {
    // パスワードのハッシュ化
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // ユーザーの作成
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });

    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: "ユーザー登録中にエラーが発生しました" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json({ error: "ユーザーが見つかりません" });
    }

    // パスワードの検証
    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) {
      return res.status(400).json({ error: "パスワードが間違っています" });
    }

    // レスポンス（ここではシンプルに成功のみを返す）
    res.json({ message: "ログイン成功" });
  } catch (error) {
    res.status(500).json({ error: "ログイン中にエラーが発生しました" });
  }
};
