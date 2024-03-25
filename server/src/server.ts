import express from "express";
import mongoose from "mongoose";
import blogRouters from "./routes/blogRoutes";
import authRoutes from "./routes/authRoutes";
import cors from "cors";

const app = express();

//mongoDBへの接続
const mongoURI = "mongodb://mongodb:27017/blog";

//mongoDBへの接続
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDBに接続しました"))
  .catch((err) => console.error("MongoDBへの接続エラー: ", err));

app.use(express.json());

// CORSをすべてのルートに対して有効化
// app.use(
//   cors({
//     origin: ["http://localhost", "http://localhost:5000"],
//   })
// );

app.use(cors());

// ルーティングを追加
app.use(`/api/blogs`, blogRouters);
app.use(`/api/users`, authRoutes);

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
