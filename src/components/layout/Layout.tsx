import { makeStyles } from "@mui/styles";
import React, { ReactElement, useEffect, useState } from "react";
import Aside from "../aside/Aside";
import Footer from "../Footer";

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
    paddingTop: "7.5rem",
    paddingRight: "1.25rem",
    maxWidth: "60rem",
    "@media (max-width:1000px)": {
      paddingRight: "0rem",
      maxWidth: "100%",
      paddingTop: "0",
    },
  },
}));

interface ILayout {
  children: ReactElement;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const classes = useStyles();

  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

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
      {isDesktop ? DesktopInterface : MobileInterface}
      <Footer />
    </div>
  );
};

export default Layout;