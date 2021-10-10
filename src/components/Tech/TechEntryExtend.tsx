import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    padding: "0.75rem 3rem 1.75rem 3rem",
    maxWidth: "40rem",
  },
  bolder: {
    fontWeight: 400,
  },
  margin: {
    marginBottom: "1.25rem",
  },
  margin2x: {
    marginBottom: "2.5rem",
  },
  slide: {
    msTransform: "scaleY(0)",
    WebkitTransform: "scaleY(0)",
    transform: "scaleY(0)",
    height: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  img: {
    width: "32rem",
    maxHeight: "100%",
  },
  hover: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});

interface ILink {
  title: string;
  link: string;
}

interface IEntryExtend {
  name: string;
  description: string;
  date: string;
  technologies: string[];
  links: ILink[];
  imageLocations: string[];
  extended: boolean;
}

const EntryExtend: React.FC<IEntryExtend> = ({
  name,
  description,
  date,
  technologies,
  links,
  imageLocations,
  extended,
}) => {
  const classes = useStyles();

  const linkOnClick = (url: string) => {
    const newWindow = window.open(
      "http://" + url,
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <tr>
      <td colSpan={4}>
        <div
          className={`${classes.container} ${!extended ? classes.slide : ""}`}
        >
          <p className={classes.bolder}>{name}</p>
          <p className={`${classes.bolder} ${classes.margin}`}>{date}</p>
          <p className={classes.margin}>{description}</p>
          <p className={classes.margin}>
            Technologies:{" "}
            {technologies.slice(0, -1).map((tech) => (
              <span>{tech}, </span>
            ))}
            {technologies[technologies.length - 1]}
          </p>
          <p className={classes.margin}>
            Links:{" "}
            {links.length > 1
              ? links.slice(0, -1).map((link) => (
                  <span
                    className={classes.hover}
                    onClick={() => linkOnClick(link.link)}
                  >
                    {link.title},{" "}
                  </span>
                ))
              : ""}
            {
              links.slice(links.length - 1, links.length).map((link) => (
                <span
                  className={classes.hover}
                  onClick={() => linkOnClick(link.link)}
                >
                  {link.title}
                </span>
              )) /* Work around for odd undefined error for container data type */
            }
          </p>
          {imageLocations.length > 1
            ? imageLocations
                .slice(0, -1)
                .map((imageLocation) => (
                  <img
                    src={imageLocation}
                    alt={imageLocation}
                    className={`${classes.img} ${classes.hover} ${classes.margin2x}`}
                  />
                ))
            : ""}
          <img
            src={imageLocations[imageLocations.length - 1]}
            alt={imageLocations[imageLocations.length - 1]}
            className={`${classes.img} ${classes.hover}`}
          />
        </div>
      </td>
    </tr>
  );
};

export default EntryExtend;