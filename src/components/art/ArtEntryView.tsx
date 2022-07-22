import React from "react";
import { makeStyles } from "@mui/styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const useStyles = makeStyles(() => ({
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
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    margin: 0,
    padding: 0,
  },
  imageTitle: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "2.5rem 3rem",
    "@media (max-width:1000px)": {
      padding: "1rem 2.5rem",
    },
  },
  pointer: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

interface IArtEntryView {
  node: any;
}

const ArtEntryView: React.FC<IArtEntryView> = ({ node }) => {
  const classes = useStyles();

  return (
    <div>
      <Link to={node.pageSlug}>
        <GatsbyImage image={getImage(node.thumbnail)} alt={node.thumbnail} />
      </Link>
      <div className={classes.imageTitle}>
        <Link to={node.pageSlug}>
          <p className={classes.pointer}>
            {node.name} - {node.date}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ArtEntryView;
