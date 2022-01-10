import { makeStyles } from "@mui/styles";
import ArtEntries from "./ArtEntries";

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
      {
        ArtEntries.map(ArtEntry => (
          <div>
            <img
              src={ArtEntry.thumbnail}
              alt={ArtEntry.name}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />

            <div className={classes.imageTitle}>
              <p>{ArtEntry.name} - {ArtEntry.date}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default ArtContent;
