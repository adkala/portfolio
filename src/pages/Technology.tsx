import { makeStyles } from "@mui/styles";
import Content from "../components/Tech/TechContent";
import Aside from "../components/Aside";

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

const Technology: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.parent}>
      <div className={classes.body}>
          <Content />
        <Aside />
      </div>
    </div>
  );
};

export default Technology;