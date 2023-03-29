import { tokens } from "../../../../theme";
import background from "../../../img/hobby.jpg"

const interestStyle = (theme) => ({

    interestWrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: "100%",
        position: "relative",
        height: '85vh',
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
            height: "100%",
            opacity: 0.1,
            "-webkit-mask-image": "-webkit-radial-gradient(white, transparent 70%)",
        },
    },
    IconBreadcrumbsWrapper: {
        marginLeft: '20px',
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
    interestBodyWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    iconWrapper: {

    },
    interestNameWrapper: {
        display: 'flex',
        justifyContent: 'center',
    },
    interestDescriptionWrapper: {
        display: 'flex',
    },
});

export default interestStyle;
