import { tokens } from "../../../../theme";

const topBarStyle = (theme) => ({

    tobBar: {
        '& .MuiTypography-root': {
            marginTop: '10px',
            color: `${tokens(theme.palette.mode).blueAccent[500]} `,
            flexGrow: 1,
            alignItems: 'center',
            marginLeft: '10px',
            marginY: 'auto',
            letterSpacing: '5px',
            fontWeight: '700',
            fontSize: '25px'
        },
    },
});

export default topBarStyle;
