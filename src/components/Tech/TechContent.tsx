import "./TechContent.css";
import { makeStyles } from "@mui/styles";
import Entry from "./TechEntry";
import Entries from "./TechEntries";

const useStyles = makeStyles(() => ({
  content: {
    paddingTop: "12.75rem",
    paddingRight: "2.5rem",
    maxWidth: "60rem",
  },
  table: {
    fontWeight: 300,
  },
  name: {
    width: "12rem",
  },
  description: {
    width: "28rem",
  },
  date: {
    width: "12rem",
  },
  padding: {
    paddingBottom: "1rem",
  },
}));

const TechContent: React.FC = () => {
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
        {Entries.map((entry) => (
          <>
            <Entry
              name={entry.name}
              description={entry.description}
              date={entry.date}
              technologies={entry.technologies}
              links={entry.links}
              imageLocations={entry.imageLocations}
            />
          </>
        ))}
      </table>
    </div>
  );
};

export default TechContent;
