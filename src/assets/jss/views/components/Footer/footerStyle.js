import { tokens } from '../../../../../theme'

const footerStyle = (theme) => ({
    footer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "auto",
        marginBottom: "0",
        position: "absolute",
        bottom: "0",
        color: "#8a8383bd",
        width: "100%",
    },

    divider: {
        width: "1px",
        height: "33px",
        "-webkit - transform": "rotate(20deg)",
        "-ms - transform": "rotate(20deg)",
        transform: "rotate(20deg)",
        marginRight: "30px",
        marginLeft: "30px",
        backgroundColor: ` ${tokens(theme.palette.mode).grey[300]} `,
    }
});

export default footerStyle;
