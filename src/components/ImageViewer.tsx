import { makeStyles } from "@mui/styles";
import { useState } from "react";
import Aside from "./Aside";

const useStyles = makeStyles(() => ({
    body: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    header: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "2.5rem"
    },
    leftMargin: {
        marginLeft: "5rem"
    },
    rightMargin: {
        marginRight: "5rem"  
    },
    imageContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    footer: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginBottom: "2.5rem"
    },
    image: {
        width: "75%"
    },
    bold: {
        fontWeight: 400
    },
    index: {
        margin: "2.5rem .5rem 0 .5rem"   
    },
    hover: {
        '&:hover': {
            cursor: "pointer"
        }
    },
    disable: {
        opacity: .33,
    },
    disableHover: {
        '&:hover': {
            cursor: "default"
        }
    }
}));

interface IImageViewer {
    title: string;
    imageLocations: string[];
    index: number;
    closeImageViewer: any;
}

const ImageViewer: React.FC<IImageViewer> = ({
    title,
    imageLocations, 
    index,
    closeImageViewer
}) => {
    const classes = useStyles();

    const [state, setState] = useState({
        index: index
    });

    const setIndex = (index: number) => setState({index: index});

    const goPrev = () => {
        if (state.index > 0) {
            setState({index: state.index - 1});
        }
    };

    const goNext = () => {
        if (state.index < imageLocations.length - 1) {
            setState({index: state.index + 1});
        }
    }

    return (
        <div className={classes.body}>
            <div className={classes.header}>
                <div className={classes.leftMargin}>
                    <p className={classes.bold}>{title}</p>
                    <p 
                        className={classes.hover}
                        onClick={closeImageViewer}
                    >
                        CLOSE
                    </p>
                </div>
                <div className={classes.rightMargin}>
                    <Aside mini={true} />
                </div>
            </div>
            <div className={classes.imageContainer}>
                <p className={`
                    ${classes.leftMargin} 
                    ${classes.hover}
                    ${state.index === 0 && (`${classes.disable} ${classes.disableHover}`)} 
                    noselect
                `} onClick={goPrev}>PREVIOUS</p>
                <img
                    src={imageLocations[state.index]}
                    alt={imageLocations[state.index]}
                    className={classes.image}
                />
                <p className={`
                    ${classes.rightMargin} 
                    ${classes.hover}
                    ${state.index === imageLocations.length - 1 && (`${classes.disable} ${classes.disableHover}`)}  
                    noselect
                `} onClick={goNext}>NEXT</p>
            </div>
            <div className={classes.footer}>
                {
                    imageLocations.map((_, i) => (
                        <p 
                            className={`
                                ${classes.index} 
                                ${i !== state.index && classes.disable}
                                ${classes.hover}
                            `}
                            onClick={() => setIndex(i)}
                        >{i}</p>
                    ))
                }
            </div>
        </div>
    )
};

export default ImageViewer;