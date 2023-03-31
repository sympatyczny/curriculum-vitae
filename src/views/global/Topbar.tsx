import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ConditionalRender from "../../components/ConditionalRender/ConditionalRender";
import { useTheme as useThemeCore } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import styles from "../../assets/jss/views/global/topBarStyle";


// @ts-ignore
const useStyles = makeStyles(styles);

const Topbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const themeCore = useThemeCore();
  const xsDown = useMediaQuery(themeCore.breakpoints.down('xs'));

  return (
    <Box className={classes.tobBar} display="flex" justifyContent="flex-end" p={2} mb={1}
      sx={{
        background: xsDown ? `${colors.primary[400]} !important` : "auto",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: 'flex-end', flexDirection: "row", width: '100%' }} >
        <ConditionalRender
          show={xsDown}
          onTrue={() => (
            <Typography variant="h3" component="div" >
              Curriculum Vitae
            </Typography>
          )}
        />
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
