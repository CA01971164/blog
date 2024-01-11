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
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const HomeIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

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
