import { tokens } from "../../../../../theme";

const CustomSpeedDialStyle = (theme) => ({

    customSpeedDialWrapper: {
        '& .MuiSpeedDial-fab': {
            backgroundColor: `${tokens(theme.palette.mode).blueAccent[500]}`,
        }
    },
    speedDial: {
        '& .MuiSpeedDialAction-staticTooltipLabel': {
            padding: 0,
            width: '70px',
        },
    },
});

export default CustomSpeedDialStyle;
