import background from "../../../img/personalData.jpg"
import { tokens } from "../../../../theme";

const personalDataStyle = (theme) => ({
    personalDataWrapper: {
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
            height: '85vh',
        },
        minHeight: '85vh',
        justifyContent: 'space-between',
    },
    IconBreadcrumbsWrapper: {
        marginLeft: '20px',
    },
    InformationsWrapper: {
        display: 'flex',
        margin: '60px auto',
        flexDirection: 'column',
        borderRadius: '8px',
        padding: '10px',
        width: '300px',
        '& .MuiListItemButton-root:hover': {
            '&, & .MuiListItemIcon-root': {
                color: `${tokens(theme.palette.mode).blueAccent[500]} `,
                fontWeight: 'bold',
            },
        },
        border: `2px solid ${tokens(theme.palette.mode).grey[500]} `,
        opacity: "0.7",
        '&:hover': {
            cursor: 'pointer',
            opacity: "1.0",
        },
        zIndex: "1",
    },
    target: {
        textDecoration: "none",
        color: "inherit",
        outline: 0,
        cursor: "auto",
    },
    personalDataProgressWrapper:{
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

export default personalDataStyle;
