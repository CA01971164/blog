import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();

//mongoDBへの接続

mongoose.connect("mongodb://localhost:27017/blog");

app.use(bodyParser.json());

// ルーティングを随時追加

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port {PORT}`);
});
