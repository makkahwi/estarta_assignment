import AppBarComp from "@/pages/components/AppBar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBarComp position="fixed">
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        eStarta Assingment
      </Typography>
    </AppBarComp>
  );
};

export default Header;
