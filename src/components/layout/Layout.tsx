import Footer from "../Footer";
import Aside from "../aside/Aside";
import { makeStyles } from "@mui/styles";
import React, {
  ReactElement,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Helmet } from "react-helmet";

const useStyles = makeStyles(() => ({
  parent: {
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "80rem",
  },
  desktopBody: {
    maxWidth: "100%",
    display: "flex",
    justifyContent: "space-between",
    minHeight: "100vh",
    "@media (max-width:1000px)": {
      flexDirection: "column-reverse",
      justifyContent: "flex-start",
    },
  },
  desktopContent: {
    padding: "0 1.25rem 0 2.5rem",
    "@media (max-width:1000px)": {
      padding: "0",
    },
  },
  desktopAside: {
    position: "sticky",
    display: "block",
    top: 0,
    minWidth: "20rem",
  },
  childrenWrap: {
    padding: "0 1.25rem",
    "@media (max-width:1000px)": {
      padding: "0",
    },
  },
  content: {
    paddingTop: "10rem",
    paddingRight: "1.25rem",
    maxWidth: "60rem",
    "@media (max-width:1000px)": {
      paddingRight: "0rem",
      maxWidth: "100%",
      paddingTop: "0",
    },
  },
  desktopWrapper: {
    display: "initial",
    "@media(max-width:1000px)": {
      display: "none",
    },
  },
  mobileWrapper: {
    display: "none",
    "@media(max-width:1000px)": {
      display: "initial",
    },
  },
}));

interface ILayout {
  children: ReactElement;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const classes = useStyles();

  const DesktopInterface = (
    <div className={classes.desktopBody}>
      <div className={classes.desktopContent}>
        <div className={classes.content}>{children}</div>
      </div>
      <div>
        <div className={classes.desktopAside}>
          <Aside desktop={true} />
        </div>
      </div>
    </div>
  );

  const MobileInterface = (
    <>
      <Aside desktop={false} />
      <div className={classes.content}>{children}</div>
    </>
  );

  return (
    <div className={classes.parent}>
      <Helmet>
        <title>addikala</title>
        <meta
          name="description"
          content="Portfolio website for Addison Kalanther"
        />
      </Helmet>
      <div className={classes.desktopWrapper}>{DesktopInterface}</div>
      <div className={classes.mobileWrapper}>{MobileInterface}</div>
      <Footer />
    </div>
  );
};

export default Layout;
