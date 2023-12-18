"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogController_1 = require("../controllers/blogController");
const router = express_1.default.Router();
router.get('/', blogController_1.getBlogs);
router.post('/', blogController_1.createBlog);
exports.default = router;
