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
    <Stack direction="row" spacing={30} alignItems="flex-end">
      <HomeIcon fontSize="large" color="action" />
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
    </Stack>
  );
};
