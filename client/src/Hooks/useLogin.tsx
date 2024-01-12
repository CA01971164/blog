import { useState } from "react";
import axios from "axios";

export const useLogin = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password,
        }
      );
      console.log("ログイン成功", response.data);
      // ここで認証成功時の処理を実装
      setOpen(false);
    } catch (error) {
      console.error("ログインエラー", error);
    }
  };

  return {
    open,
    handleClickOpen,
    handleClose,
    handleLogin,
    username,
    password,
    setUsername,
    setPassword,
  };
};
