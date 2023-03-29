import background from "../../../img/firstPage1.jpg"

const dashboardStyle = (theme) => ({
    dashboardWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        minHeight: '600px',
        width: "100%",
        position: "relative",
        '&:before': {
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "200px -250px",
            backgroundSize: "cover",
            content: '" "',
            display: "block",
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            opacity: 0.1,
            "-webkit-mask-image": "-webkit-radial-gradient(white, transparent 60%)",
            height: "90vh",
        },
    },
    icon: {
    },

});

export default dashboardStyle;
