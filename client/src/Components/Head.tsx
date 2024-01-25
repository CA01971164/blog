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
import { useLogin } from "../Hooks/useLogin";
import { Create } from "./Create";

export const Head: React.FC = () => {
  const {
    open,
    handleClickOpen,
    handleClose,
    handleLogin,
    username,
    password,
    setUsername,
    setPassword,
  } = useLogin();

  return (
    <Box>
      <Stack
        direction="row"
        spacing={3}
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <HomeIcon fontSize="large" color="action" />
      </Stack>
      {/* <Button variant="contained" onClick={handleClickOpen}>
          ログイン
        </Button>
      // </Stack>を配置する
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            id="password"
            label="パスワード"
            type="password"
            fullWidth
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Create />
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={handleLogin}>ログイン</Button>
        </DialogActions>
      </Dialog> */}
    </Box>
  );
};
