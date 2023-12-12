import { Box, Link, Typography, Toolbar } from "@mui/material";

export const Head: React.FC = () => {
  return (
    <Box
      sx={{
        typography: "body1",
        "& > :not(style) ~ :not(style)": {
          ml: 2,
          width: 200,
          height: 50,
          borderBottomColor: "black",
          borderBottomStyle: "solid",
          borderBottomWidth: 2
        },
      }}
    >
      <Link href="#">home</Link>
      <Link href="#" >
        言語
      </Link>
      <Link href="#" variant="body2">
        カテゴリ
      </Link>
      <Link href="#" variant="body2">
        お問い合わせ
      </Link>
      <Link href="#" variant="body2">
        ログイン
      </Link>
    </Box>
  );
};
