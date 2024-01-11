import { useState } from "react";

export const useLogin = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    console.log("ログイン処理");
    setOpen(false);
  };

  return { open, handleClickOpen, handleClose, handleLogin };
};
