import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import blogRouters from "./routes/blogRoutes";
import authRoutes from "./routes/authRoutes";
import path from "path";
import cors from "cors";

const app = express();

//mongoDBへの接続
const mongoURI = "mongodb://127.0.0.1:27017/blog";

//mongoDBへの接続
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDBに接続しました"))
  .catch((err) => console.error("MongoDBへの接続エラー: ", err));

app.use(bodyParser.json());

// CORSをすべてのルートに対して有効化
app.use(
  cors({
    origin: "http://localhost:5000",
  })
);

//静的ファイルの提供
app.use(express.static(path.join(__dirname, "../../client/build")));

// ルーティングを追加
app.use(`/blogs`, blogRouters);
app.use(`/api/auth`, authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
