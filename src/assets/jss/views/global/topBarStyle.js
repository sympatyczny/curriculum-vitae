import { tokens } from "../../../../theme";

const topBarStyle = (theme) => ({

    tobBar: {
        '& .MuiTypography-root': {
            color: `${tokens(theme.palette.mode).blueAccent[500]} `,
            flexGrow: 1,
            alignItems: 'center',
            marginLeft: '10px',
            letterSpacing: '2px',
            fontWeight: '700',
            fontSize: '25px',
            marginTop: 'auto',
            marginBottom: 'auto',
        },
        marginTop: 'auto',
        marginBottom: 'auto',
    },
});

export default topBarStyle;
