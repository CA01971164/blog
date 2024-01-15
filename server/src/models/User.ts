import mongoose from "mongoose";

interface IUser {
  username: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// IUserDocumentを使用してモデルを定義
const User = mongoose.model("User", userSchema);

export default User;
