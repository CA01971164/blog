import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { useNavigate } from "react-router-dom";

export const HomeIcon: React.FC<SvgIconProps> = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <SvgIcon {...props} onClick={handleClick} data-testid="home-icon">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};
