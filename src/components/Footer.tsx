import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    margin: "1rem 2.5rem",
    position: "fixed",
    bottom: 0,
  },
  text: {
    opacity: 0.33,
    textTransform: "none",
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <p className={classes.text}>
        Designed and Developed by Addison Kalanther ©
      </p>
    </div>
  );
};

export default Footer;
