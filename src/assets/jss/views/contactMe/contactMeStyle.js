import background from "../../../img/contactMe.jpg"
import { tokens } from "../../../../theme";

const contactMeStyle = (theme) => ({

    contactMeWrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
        paddingTop: '20px',
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
            width: '100%',
            opacity: 0.1,
            "-webkit-mask-image": "-webkit-radial-gradient(white, transparent 60%)",
            height: '85vh',
        },
        minHeight: '90vh',
        justifyContent: 'space-between',
    },
    button: {
        position: "-webkit-sticky",
        position: "absolute",
        right: '30px',
        top: '30px',
        alignSelf: 'center',
        zIndex: '1',
    },
    additionalInfo: {
        zIndex: '1',
    },
    link: {
        textDecoration: 'none',
        color: `${tokens(theme.palette.mode).blueAccent[500]}`,
    },
});

export default contactMeStyle;
