import { makeStyles } from "@mui/styles";
import { useState } from "react";
import ImageViewer from "../ImageViewer";
import { ITechEntry } from "./TechEntries";

const useStyles = makeStyles({
  container: {
    padding: "0.75rem 3rem 1.75rem 3rem",
    maxWidth: "40rem",
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
  },
  hover: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});

interface IEntryExtend extends ITechEntry{
  extended: boolean;
}

const EntryExtend: React.FC<IEntryExtend> = ({
  name,
  description,
  date,
  technologies,
  links,
  imageLocations,
  extended
}) => {
  const classes = useStyles();
  const [state, setState] = useState({
    imageViewer: false,
    imageIndex: 0
  });


  const openImageViewer = (index: number) => {
    document.body.style.overflow = "hidden";
    setState({imageViewer: true, imageIndex: index})
  };
  const closeImageViewer = () => {
    document.body.style.overflow = "visible"
    setState({...state, imageViewer: false});
  };

  const linkOnClick = (url: string) => {
    const newWindow = window.open(
      "http://" + url,
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
      <tr>
        <td colSpan={4}>
          <div
            className={`${classes.container} ${!extended ? classes.slide : ""}`}
          >
            <p className={classes.bolder}>{name}</p>
            <p className={`${classes.bolder} ${classes.margin}`}>{date}</p>
            <p className={classes.margin}>{description}</p>
            <p className={classes.margin}>
              Technologies:{" "}
              {technologies.slice(0, -1).map((tech) => (
                <span>{tech}, </span>
              ))}
              {technologies[technologies.length - 1]}
            </p>
            <p className={classes.margin}>
              Links:{" "}
              {links.length > 1
                ? links.slice(0, -1).map((link) => (
                    <span
                      className={classes.hover}
                      onClick={() => linkOnClick(link.link)}
                    >
                      {link.title},{" "}
                    </span>
                  ))
                : ""}
              {
                links.slice(links.length - 1, links.length).map((link) => (
                  <span
                    className={classes.hover}
                    onClick={() => linkOnClick(link.link)}
                  >
                    {link.title}
                  </span>
                )) /* Work around for odd undefined error for container data type */
              }
            </p>
            {imageLocations.length > 1
              ? imageLocations
                  .slice(0, -1)
                  .map((imageLocation, index) => (
                    <img
                      src={imageLocation}
                      alt={imageLocation}
                      className={`${classes.img} ${classes.hover} ${classes.margin2x}`}
                      onClick={() => {openImageViewer(index)}}
                    />
                  ))
              : ""}
            <img
              src={imageLocations[imageLocations.length - 1]}
              alt={imageLocations[imageLocations.length - 1]}
              className={`${classes.img} ${classes.hover}`}
              onClick={() => openImageViewer(imageLocations.length - 1)}
            />
          </div>
        </td>
      </tr>

      {state.imageViewer && (
        <ImageViewer 
          title={name}
          imageLocations={imageLocations}
          index={state.imageIndex}
          closeImageViewer={closeImageViewer}
        />
      )}
    </>
  );
};

export default EntryExtend;
