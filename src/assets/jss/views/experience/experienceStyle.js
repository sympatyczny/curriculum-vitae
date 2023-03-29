import { tokens } from "../../../../theme";
import background from "../../../img/work1.jpg"

const experienceStyle = (theme) => ({
    experienceWrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: "100%",
        position: "relative",
        '&:before': {
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "59% 73%",
            backgroundSize: "cover",
            content: '" "',
            display: "block",
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            opacity: 0.1,
            "-webkit-mask-image": "-webkit-radial-gradient(white, transparent 70%)",
            height: '85vh',
        },
    },

    IconBreadcrumbsWrapper: {
        marginLeft: '20px',
    },

    workPlaceWrapper: {
        display: 'flex',
        margin: '40px auto 40px auto',
        flexDirection: 'column',
        borderRadius: '8px',
        border: `2px solid ${tokens(theme.palette.mode).grey[500]} `,
        padding: '10px',
        maxWidth: '700px',
        opacity: "0.7",
        '&:hover': {
            cursor: 'pointer',
            border: `2px solid ${tokens(theme.palette.mode).blueAccent[500]} `,
            color: `${tokens(theme.palette.mode).blueAccent[500]} `,
            opacity: "1.0",
        },
        zIndex: "1",
    },

    hobbyWrapper: {
        display: 'flex',
        marginTop: '60px',
        flexDirection: 'column',
        borderRadius: '8px',
        border: `2px solid ${tokens(theme.palette.mode).grey[500]} `,
        padding: '10px',
        maxWidth: '500px',
        opacity: "0.7",
        '&:hover': {
            cursor: 'pointer',
            border: `2px solid ${tokens(theme.palette.mode).blueAccent[500]} `,
            color: `${tokens(theme.palette.mode).blueAccent[500]} `,
            opacity: "1.0",
        },
        zIndex: "1",
    },

    workPlaceNameWrapper: {
        display: 'flex',
        justifyContent: 'center',
    },
    workDurationWrapper: {
        display: 'flex',
        justifyContent: 'center',
    },
    workPositionWrapper: {
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
    },
    jobDescriptionWrapper: {
        display: 'flex',
    },
    skillsWrapper: {
        display: 'flex',
        flexDirection: "row-reverse",
    },
    listSubheader: {
        backgroundColor: "transparent !important",
    },
});

export default experienceStyle;
