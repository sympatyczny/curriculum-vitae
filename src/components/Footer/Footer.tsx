import styles from "../../assets/jss/views/components/Footer/footerStyle";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, useTheme } from '@mui/material';
import { tokens } from "../../theme";

// @ts-ignore
const useStyles = makeStyles(styles);

const Footer = () => {

    const classes = useStyles()
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <div className={classes.footer}>
            <div className={classes.divider} />
            <Typography variant="h6" color={colors.grey[300]}>
                Copyright © 2023 All right Reserved
            </Typography>
            <div className={classes.divider} />
        </div>
    )
}

export default Footer;
