import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { HomeIcon } from "./HomeIcon";

export const Head: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    // ログインロジックをここに実装
    console.log("ログイン処理");
    setOpen(false);
  };

  return (
    <Box>
      <Stack
        direction="row"
        spacing={3}
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <HomeIcon fontSize="large" color="action" />
        <Button variant="contained" onClick={handleClickOpen}>
          ログイン
        </Button>
      </Stack>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ログイン</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ユーザー名とパスワードを入力してください。
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="ユーザー名"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="password"
            label="パスワード"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={handleLogin}>ログイン</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
