import background from "../../../img/magnifier1.jpg"

const notFoundStyle = (theme) => ({

    notFoundWrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: "100%",
        position: "relative",
        '&:before': {
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 43%",
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

    notFoundTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            marginTop: '40px',
            '& .MuiTypography-root': {
                marginTop: '10px',
            },
            border: 'none',
            width: '80%',
        },
    },
    dashboardLink: {
        textDecoration: "none",
        zIndex: '1',
    },
});

export default notFoundStyle;