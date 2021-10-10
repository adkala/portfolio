import { makeStyles } from "@mui/styles";
import React from "react";
import { useHistory, useLocation } from "react-router";

const instagram = "www.instagram.com/addikala";
const linkedin = "www.linkedin.com/in/addikala";
const github = "www.github.com/adkala";

const ART_KEY = "/art";
const TECH_KEY = "/tech";

const useStyles = makeStyles(() => ({
  column: {
    minWidth: "20rem",
    display: "flex",
    justifyContent: "flex-end",
  },
  aside: {
    paddingTop: "5rem",
    marginRight: "3.5rem",
    textAlign: "right",
    maxWidth: "12rem",
    position: "sticky",
    display: "block",
    top: 0,
  },
  spacer: {
    height: "1rem",
    width: "100%",
  },
  onClick: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  bold: {
    fontWeight: 400,
  },
}));

const Aside: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const path = location.pathname;

  // eslint-disable-next-line no-restricted-globals
  const redirect = (url: string) => {
    const newWindow = window.open(
      "http://" + url,
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={classes.column}>
      <div>
        <div className={classes.aside}>
          <p>Addison Kalanther</p>
          <p>
            <span
              onClick={() => history.push(ART_KEY)}
              className={`${classes.onClick} ${
                path === ART_KEY ? classes.bold : ""
              }`}
            >
              Art
            </span>{" "}
            |{" "}
            <span
              onClick={() => history.push(TECH_KEY)}
              className={`${classes.onClick} ${
                path === TECH_KEY ? classes.bold : ""
              }`}
            >
              Technology
            </span>
          </p>

          <div className={classes.spacer} />

          <p>
            EECS and Fine Arts student at UC Berkeley. Exploring the
            intersection between computer science and design
          </p>

          <div className={classes.spacer} />

          <p>
            <span
              className={classes.onClick}
              onClick={() => redirect(instagram)}
            >
              Instagram
            </span>
          </p>
          <p>
            <span
              className={classes.onClick}
              onClick={() => redirect(linkedin)}
            >
              LinkedIn
            </span>
          </p>
          <p>
            <span className={classes.onClick} onClick={() => redirect(github)}>
              GitHub
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aside;