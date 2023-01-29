import AppBarComp from "@/pages/components/AppBar";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <AppBarComp
      position="static"
      sx={{ top: "auto", bottom: 0 }}
      color="default"
    >
      <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
        eStarta Assingment{" "}
        <span style={{ textDecoration: "underline" }}>29 Jan 2023</span> By{" "}
        <a href="https://suhaib.dev/" target="_blank">
          Suhaib Ahmad
        </a>
      </Typography>
    </AppBarComp>
  );
};

export default Footer;
