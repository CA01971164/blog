import { Box, Link, Typography, Toolbar } from "@mui/material";

export const Head: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        typography: "body1",
        "& > :not(style) ~ :not(style)": {
          ml: 6,
          width: 200,
          height: 50,
        },
      }}
    >
      <Link href="#" variant="body2">
        home
      </Link>
      <Link href="#" variant="body2">
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
