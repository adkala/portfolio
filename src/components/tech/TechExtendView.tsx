import { makeStyles } from "@mui/styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const useStyles = makeStyles({
  container: {
    padding: "0.75rem 3rem 1.75rem 3rem",
    maxWidth: "40rem",
    "@media (max-width:600px)": {
      padding: "0.75rem 0rem 1.75rem 0rem",
    },
  },
  bolder: {
    fontWeight: 400,
  },
  margin: {
    marginBottom: "1.25rem",
  },
  margin2x: {
    marginBottom: "2.5rem",
  },
  slide: {
    msTransform: "scaleY(0)",
    WebkitTransform: "scaleY(0)",
    transform: "scaleY(0)",
    height: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  img: {
    width: "32rem",
    maxHeight: "100%",
    "@media (max-width:675px)": {
      width: "inherit",
    },
  },
  hover: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});

interface ITechExtendView {
  node: any;
  extended: boolean;
}

const TechExtendView: React.FC<ITechExtendView> = ({ node, extended }) => {
  const classes = useStyles();

  return (
    <>
      <tr>
        <td colSpan={4}>
          <div
            className={`${classes.container} ${!extended ? classes.slide : ""}`}
          >
            <p className={classes.bolder}>{node.name}</p>
            <p className={`${classes.bolder} ${classes.margin}`}>{node.date}</p>
            <p className={classes.margin}>{node.description}</p>
            <p className={classes.margin}>
              Technologies:{" "}
              {node.technologies.slice(0, -1).map((tech) => (
                <span>{tech}, </span>
              ))}
              {node.technologies[node.technologies.length - 1]}
            </p>
            <p className={classes.margin}>
              Links:{" "}
              {node.links.length > 1
                ? node.links.slice(0, -1).map((link) => (
                    <span className={classes.hover}>
                      <a
                        href={"http://" + link.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.title}
                      </a>
                      ,{" "}
                    </span>
                  ))
                : ""}
              {
                node.links
                  .slice(node.links.length - 1, node.links.length)
                  .map((link) => (
                    <span className={classes.hover}>
                      <a
                        href={"http://" + link.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.title}
                      </a>
                    </span>
                  )) /* Work around for odd undefined error for container data type */
              }
            </p>
            {node.images.length > 1
              ? node.images.slice(0, -1).map((image, index) => (
                  <div className={`${classes.img} ${classes.margin2x}`}>
                    <GatsbyImage
                      image={getImage(image)}
                      alt={`${node.name} ${index}`}
                    />
                  </div>
                ))
              : ""}
            <div className={`${classes.img}`}>
              <GatsbyImage
                image={getImage(node.images[node.images.length - 1])}
                alt={`${node.name} ${node.images.length - 1}`}
              />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TechExtendView;
