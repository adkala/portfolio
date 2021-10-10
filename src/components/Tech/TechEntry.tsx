import { makeStyles } from "@mui/styles";
import { useState } from "react";
import TechEntryExtend from "./TechEntryExtend";

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
  },
  noUserSelect: {
    userSelect: "none",
    msUserSelect: "none",
    WebkitUserSelect: "none",
  },
});

interface ILink {
  title: string,
  link: string
}

interface IEntry {
  name: string;
  description: string;
  date: string;
  technologies: string[];
  links: ILink[];
  imageLocations: string[];
}

const Entry: React.FC<IEntry> = ({
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

  const toggleSlide = () => setState({ extended: !state.extended });

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
          className={`${classes.padding} ${classes.hover} ${classes.noUserSelect}`}
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
