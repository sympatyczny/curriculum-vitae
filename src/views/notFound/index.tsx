import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from "../../assets/jss/views/notFound/notFoundStyle";
import { makeStyles } from '@material-ui/core/styles';
import CustomFloatingAction from '../../components/CustomButtons/CustomFloatingAction';

// @ts-ignore
const useStyles = makeStyles(styles);

const NotFound = () => {

    const classes = useStyles();
    return (
        <div className={classes.notFoundWrapper}>
            <div className={classes.notFoundTitle}>
                <Typography variant="h2" marginTop={2}>
                    Sorry, the page you were looking for was not found.
                </Typography>
                <Link to="/" className={classes.dashboardLink}>Return to home</Link>
            </div>
            <CustomFloatingAction />
        </div>
    )
}

export default NotFound;
