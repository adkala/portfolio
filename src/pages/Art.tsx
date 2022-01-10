import { makeStyles } from "@mui/styles";
import Aside from "../components/Aside";
import Content from "../components/art/ArtContent";
import Footer from "../components/Footer";

const useStyles = makeStyles(() => ({
  parent: {
    marginRight: "auto",
    marginLeft: "auto",
    width: "80rem",
  },
  body: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Art: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.parent}>
      <div className={classes.body}>
        <Content />
        <Aside />
      </div>
      <Footer />
    </div>
  );
};

export default Art;
