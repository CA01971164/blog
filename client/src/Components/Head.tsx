import { Box, Link, Stack, Typography, Toolbar, Button } from "@mui/material";
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
    <Stack
      direction="row"
      spacing={3}
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <HomeIcon fontSize="large" color="action" />
      <Button variant="contained">ログイン</Button>
    </Stack>
  );
};
