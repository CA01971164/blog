"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const blogRoutes_1 = __importDefault(require("./routes/blogRoutes"));
const app = (0, express_1.default)();
//mongoDBへの接続
mongoose_1.default.connect("mongodb://localhost:27017/blog");
app.use(body_parser_1.default.json());
// ルーティングを追加
app.use(`/users`, blogRoutes_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port {PORT}`);
});
