import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import blogRouters from "./routes/blogRoutes";

const app = express();
const path = require(`path`);

const passport = require("passport");
const LocalStrage = require("passport-local").Strategy;
const session = require("express-session");

//mongoDBへの接続

mongoose.connect("mongodb://127.0.0.1:27017/blog");

app.use(bodyParser.json());

//静的ファイルの提供
app.use(express.static(path.join(__dirname, "../../client/build")));

// ルーティングを追加
app.use(`/`, blogRouters);

//Expressの設定
app.use(
  session({ secret: "yourSecretKey", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// ログイン機能の追加
passport.use(
  new LocalStrage((username: string, password: any, done: any) => {
    //ユーザーの認証ロジックを実装
    if (username === `yourName` && password === "yourPassword") {
      return done(null, { id: 1, username: "yourName" });
    } else {
      return done(null, false, { message: "Incorrect username or password" });
    }
  })
);

passport.serializeUser((user: any, done: any) => {
  done(null, user.id);
});

passport.deserializeUser((id: number, done: any) => {
  // ユーザーのデータベースなどから取得
  const user = { id: 1, username: "yourNmae" };
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
