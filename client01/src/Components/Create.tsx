import React, { useState } from "react";
import {
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
} from "@mui/material";
import axios from "axios";

export const Create: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpne = () => {
    setOpen(true);
  };

  const handleCreateAccount = async () => {
    try {
      await axios.post("http://localhost:5000/api/users/register", {
        username,
        password,
      });
      console.log("アカウント作成成功");
      handleClose();
    } catch (error) {
      console.error("アカウント作成エラー", error);
    }
  };

  return (
    <Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>アカウントを登録</DialogTitle>
        <DialogContent>
          <DialogContentText>アカウントを登録してください</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="登録するユーザー名"
            type="text"
            fullWidth
            variant="standard"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            id="password"
            label="登録するパスワード"
            type="password"
            fullWidth
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={handleCreateAccount}>アカウント作成</Button>
        </DialogActions>
      </Dialog>
      <Button onClick={handleOpne}>アカウントを作成</Button>
    </Box>
  );
};
