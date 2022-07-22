import { makeStyles } from "@mui/styles";
import React from "react";
import AsideMini from "./AsideMini";

const useStyles = makeStyles(() => ({
  top: {
    width: "100%",
    textAlign: "right",
    top: 0,
    backgroundColor: "white",
    zIndex: 1,
  },
  sticky: {
    position: "sticky",
  },
  topWrap: {
    padding: "1rem 2.5rem",
  },
  description: {
    width: "100%",
    textAlign: "right",
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
  },
  descriptionWrap: {
    padding: "0 2.5rem 3rem 0",
  },
  title: {
    maxWidth: "12rem",
  },
  spacer: {
    height: "2rem",
    width: "12rem",
  },
  spacer2: {
    height: "1rem",
    width: "100%",
  }
}));

interface IAside {
  desktop?: boolean;
}

const Aside: React.FC<IAside> = ({ desktop }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.spacer} />
      <div className={`${classes.top} ${!desktop ? classes.sticky : ""}`}>
        <div className={classes.topWrap}>
          <AsideMini />
        </div>
      </div>
      <div />
      <div className={classes.description}>
        <div className={classes.descriptionWrap}>
          <p className={classes.title}>
            EECS Student at UC Berkeley who likes design and art. I put stuff
            here when I'm bored.
          </p>

          <div className={classes.spacer2} />

          <p>
            <a
              href="https://www.instagram.com/addikala"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/addikala"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <a
              href="https://www.github.com/adkala"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Aside;
