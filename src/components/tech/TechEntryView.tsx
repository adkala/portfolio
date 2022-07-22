import TechExtendView from "./TechExtendView";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useState } from "react";

const useStyles = makeStyles({
  descriptionText: {
    width: "24rem",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    "@media (max-width:1200px)": {
      width: "18rem",
    },
    "@media (max-width:1000px)": {
      width: "16rem",
    },
  },
  hover: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  date: {
    "@media (max-width:520px)": {
      display: "none",
    },
  },
});

interface ITechEntryView {
  node: any;
}

const ITechEntryView: React.FC<ITechEntryView> = ({ node }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    extended: false,
  });

  const toggleSlide = () => setState({ extended: !state.extended });
  return (
    <>
      <tr>
        <td>
          <p>{node.name}</p>
        </td>
        <td>
          <p className={`${classes.descriptionText}`}>{node.description}</p>
        </td>
        <td className={`${classes.date}`}>{node.date}</td>
        <td className={`${classes.hover} noselect`} onClick={toggleSlide}>
          {!state.extended ? "Expand" : "Close"}
        </td>
      </tr>

      <TechExtendView node={node} extended={state.extended} />
    </>
  );
};

export default ITechEntryView;
