import { tokens } from "../../../../../theme";

const customTabStyle = (theme) => ({
    tabWrapper: {
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '8px',
        margin: '20px',
        minWidth: '300px',
        border: `2px solid ${tokens(theme.palette.mode).grey[500]} `,
        opacity: "0.7",
        '&:hover': {
            cursor: 'pointer',
            border: `2px solid ${tokens(theme.palette.mode).blueAccent[500]} `,
            color: `${tokens(theme.palette.mode).blueAccent[500]} !important`,
            opacity: "1.0",
        },
    },

    tabTitle: {
        marginTop: '20px',
    },

    tabButton: {
        width: '100%',
        height: '100%',
    },
});

export default customTabStyle;
