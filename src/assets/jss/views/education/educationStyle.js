import { tokens } from "../../../../theme";
import background from "../../../img/education1.jpg"

const educationStyle = (theme) => ({
    educationWrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: "100%",
        position: "relative",
        '&:before': {
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 0",
            backgroundSize: "cover",
            content: '" "',
            display: "block",
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            opacity: 0.1,
            "-webkit-mask-image": "-webkit-radial-gradient(white, transparent 60%)",
            height: "85vh",
        },
        minHeight: '85vh',
        justifyContent: 'space-between',
    },
    IconBreadcrumbsWrapper: {
        marginLeft: '20px',
    },
    schoolWrapper: {
        display: 'flex',
        marginTop: '60px',
        flexDirection: 'column',
        borderRadius: '8px',
        border: `2px solid ${tokens(theme.palette.mode).grey[500]} `,
        padding: '10px',
        maxWidth: '460px',
        opacity: "0.7",
        '&:hover': {
            cursor: 'pointer',
            border: `2px solid ${tokens(theme.palette.mode).blueAccent[500]} `,
            color: `${tokens(theme.palette.mode).blueAccent[500]} `,
            opacity: "1.0",
        },
        zIndex: "1",
        [theme.breakpoints.down('xs')]: {
            marginTop: '40px',
            '& .MuiTypography-root': {
                marginTop: '10px',
            },
            border: 'none',
        },
    },
    schoolNameWrapper: {
        display: 'flex',
        justifyContent: 'center',
    },
    facultyWrapper: {
        display: 'flex',
        justifyContent: 'center',
    },
    schoolDurationWrapper: {
        display: 'flex',
        justifyContent: 'center',
    },
    schoolTypeWrapper: {
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
    },
    courseWrapper: {
        display: 'flex',
        justifyContent: 'center',
    },
    educationProgressWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '300px',
    },
    button: {
        position: "-webkit-sticky",
        position: "absolute",
        right: '30px',
        top: '30px',
        alignSelf: 'center',
        zIndex: '2',
    },
});

export default educationStyle;
