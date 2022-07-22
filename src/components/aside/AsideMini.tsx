import { makeStyles } from "@mui/styles";
import { Link } from "gatsby";
import React from "react";

const useStyles = makeStyles(() => ({
  bold: {
    fontWeight: 400,
  },
}));

const AsideMini: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <p>Addison Kalanther</p>
      <p>
        <span
          className={`${
            typeof window != "undefined" &&
            window.location.href.indexOf("/art") !== -1
              ? classes.bold
              : ""
          }`}
        >
          <Link to="/art">Art</Link>
        </span>{" "}
        |{" "}
        <span
          className={`${
            typeof window != "undefined" &&
            window.location.href.indexOf("/tech") !== -1
              ? classes.bold
              : ""
          }`}
        >
          <Link to="/tech">Technology</Link>
        </span>
      </p>
    </div>
  );
};

export default AsideMini;
