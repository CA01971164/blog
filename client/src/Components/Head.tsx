import { Box, Link, Stack, Typography, Toolbar } from "@mui/material";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const HomeIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};

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
      <HomeIcon />
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
