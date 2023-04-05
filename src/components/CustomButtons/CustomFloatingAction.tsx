import Draggable from 'react-draggable';
import { useNavigate } from 'react-router-dom';
import styles from "../../assets/jss/views/components/customButtons/customFloatingActionStyle";
import { makeStyles } from '@material-ui/core/styles';
import { Fab } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ICustomFloatingActionProps {
    icon?: React.ReactNode;
}

// @ts-ignore
const useStyles = makeStyles(styles);

const CustomFloatingAction = ({
    icon,
}: ICustomFloatingActionProps) => {

    let navigate = useNavigate();
    const classes = useStyles();

    const onClick = () => {
        navigate(-1)
    }

    return (
        <div className={classes.customFloatingActionWrapper}>
            <Draggable >
                <Fab color={'info'} variant='extended' onClick={onClick} >
                    <ArrowBackIcon />
                </Fab>
            </Draggable>
        </div>
    )
}

export default CustomFloatingAction;
