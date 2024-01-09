import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import blogRouters from "./routes/blogRoutes";
import path from "path";

const app = express();

//mongoDBへの接続

mongoose.connect("mongodb://127.0.0.1:27017/blog");

app.use(bodyParser.json());

// CORSをすべてのルートに対して有効化
app.use(cors());

//静的ファイルの提供
app.use(express.static(path.join(__dirname, "../../client/build")));

// ルーティングを追加
app.use(`/`, blogRouters);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
function cors(): any {
  throw new Error("Function not implemented.");
}

