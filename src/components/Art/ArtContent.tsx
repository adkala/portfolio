import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  content: {
    paddingTop: "7.5rem",
    paddingRight: "2.5rem",
    maxWidth: "60rem",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  imageTitle: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "2.5rem 3rem",
  },
}));

const ArtContent: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <img
        src="../images/image2.webp"
        alt="Italian Trulli"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />

      <div className={classes.imageTitle}>
        <p>McLaren Campaign - June 2020</p>
      </div>

      <img
        src="../images/image1.jpeg"
        alt="Italian Trulli"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />

      <div className={classes.imageTitle}>
        <p>Hedi Slimane - August 2019</p>
      </div>
    </div>
  );
}

export default ArtContent;
