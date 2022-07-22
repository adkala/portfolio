import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const useStyles = makeStyles(() => ({
  content: {
    marginTop: "5.25rem",
    maxHeight: "100%",
    padding: "0 1.25rem",
    "@media (max-width:1000px)": {
      padding: "0 2rem",
    },
  },
  back: {
    marginBottom: "1.5rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
  name: {
    fontWeight: 400,
  },
  date: {
    fontWeight: 400,
    marginBottom: "1.5rem",
  },
  description: {
    marginBottom: "4.5rem",
  },
  image: {
    marginBottom: "4.5rem",
    width: "100%",
    "@media (min-width:1000px)": {
      padding: "0 1.25rem",
    },
  },
}));

interface IArtPageView {
  data: any;
}

const ArtPageView: React.FC<IArtPageView> = ({ data }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.content}>
        <p className={classes.back}>
          <Link to="/art">Back</Link>
        </p>
        <p className={classes.name}>{data.name}</p>
        <p className={classes.date}>{data.date}</p>
        <p className={classes.description}>{data.description}</p>
      </div>
      {data.images.map((image, index) => (
        <div className={classes.image}>
          <GatsbyImage image={getImage(image)} alt={`${data.name} ${index}`} />
        </div>
      ))}
    </>
  );
};

export default ArtPageView;
