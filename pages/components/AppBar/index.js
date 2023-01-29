import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const AppBarComp = ({ children, ...props }) => {
  return (
    <AppBar {...props}>
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
};

export default AppBarComp;
