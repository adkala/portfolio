import { makeStyles } from "@mui/styles";
import { useState } from "react";
import TechEntryExtend from "./TechEntryExtend";
import { ITechEntry } from "./TechEntries";

const useStyles = makeStyles({
  descriptionText: {
    width: "24rem",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  padding: {
    paddingBottom: ".5rem",
  },
  hover: {
    "&:hover": {
      cursor: "pointer",
    },
  }
});

const Entry: React.FC<ITechEntry> = ({
  name,
  description,
  date,
  technologies,
  links,
  imageLocations,
}) => {
  const classes = useStyles();
  const [state, setState] = useState({
    extended: false,
  });

  const toggleSlide = () => setState({extended: !state.extended});
  return (
    <>
      <tr>
        <td className={classes.padding}>{name}</td>
        <td>
          <p className={`${classes.descriptionText} ${classes.padding}`}>
            {description}
          </p>
        </td>
        <td className={classes.padding}>{date}</td>
        <td
          className={`${classes.padding} ${classes.hover} noselect`}
          onClick={toggleSlide}
        >
          {!state.extended ? "Expand" : "Close"}
        </td>
      </tr>

      <TechEntryExtend
        name={name}
        description={description}
        date={date}
        technologies={technologies}
        links={links}
        imageLocations={imageLocations}
        extended={state.extended}
      />


    </>
  );
};

export default Entry;
