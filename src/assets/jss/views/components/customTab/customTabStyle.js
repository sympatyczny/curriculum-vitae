import { tokens } from "../../../../../theme";

const customTabStyle = (theme) => ({
    tabWrapper: {
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '8px',
        margin: '20px',
        minWidth: '300px',
        opacity: "0.7",
        '&:hover, &:focus, &:focus-visible': {
            cursor: 'pointer',
            border: 'none',
            color: `${tokens(theme.palette.mode).blueAccent[500]} !important`,
            opacity: "1.0",
        },
        "-webkit-box-shadow": "0 1px 23.5px 9px #dddddd",
        "-moz-box-shadow": "0 1px 23.5px 9px #dddddd",
        "box-shadow": "0 1px 23.5px 9px #dddddd",
        [theme.breakpoints.down('xs')]: {
            maxWidth: '190px',
            minWidth: '190px',
            maxHeight: '100px',
            '& .MuiTypography-h1': {
                fontSize: '22px',
            }
        },

    },

    tabTitle: {
        marginTop: '20px',
    },

    tabButton: {
        width: '100%',
        height: '100%',

        [theme.breakpoints.down('xs')]: {
            'MuiTypography-root': {
                fontSize: '12px',
            }
        }


    },
});

export default customTabStyle;
