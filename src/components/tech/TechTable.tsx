import TechEntryView from "./TechEntryView";
import "./TechTable.css";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  content: {
    marginTop: "2.5rem",
    marginBottom: "3.5rem",
    maxWidth: "60rem",
    marginLeft: "1rem",
    "@media (max-width:1000px)": {
      paddingRight: "2.5rem",
      paddingLeft: "1.25rem",
    },
  },
  table: {
    fontWeight: 300,
  },
  name: {
    width: "12rem",
  },
  description: {
    width: "28rem",
    "@media (max-width:1200px)": {
      width: "20rem",
    },
    "@media (max-width:1000px)": {
      width: "18rem",
    },
  },
  date: {
    width: "14em",
    "@media (max-width:520px)": {
      display: "none",
    },
  },
  padding: {
    paddingBottom: "1rem",
  },
}));

interface ITechTable {
  data: any;
}

const TechTable: React.FC<ITechTable> = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <table>
        <tr>
          <th className={`${classes.name} ${classes.padding}`}>Name</th>
          <th className={`${classes.description} ${classes.padding}`}>
            Description
          </th>
          <th className={`${classes.date} ${classes.padding}`}>Date</th>
          <th></th>
        </tr>
        {data.allTech.nodes.map((node: any) => (
          <TechEntryView node={node} />
        ))}
      </table>
    </div>
  );
};

export default TechTable;
