import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <AppBar position="static" sx={{ top: "auto", bottom: 0 }} color="default">
      <Toolbar>
        <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
          eStarta Assingment{" "}
          <span style={{ textDecoration: "underline" }}>29 Jan 2023</span> By{" "}
          <a href="https://suhaib.dev/" target="_blank">
            Suhaib Ahmad
          </a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
