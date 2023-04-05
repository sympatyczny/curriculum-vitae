import { tokens } from "../../../../../theme";

const CustomFloatingActionStyle = (theme) => ({

  customFloatingActionWrapper: {
    '& .MuiFab-root': {
      backgroundColor: `${tokens(theme.palette.mode).blueAccent[500]}`,
      color: '#fff',
    }
  },
});

export default CustomFloatingActionStyle;
