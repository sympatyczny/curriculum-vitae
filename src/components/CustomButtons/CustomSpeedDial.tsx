import { Backdrop, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Draggable from 'react-draggable';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ShareIcon from '@mui/icons-material/Share';
import styles from "../../assets/jss/views/components/customButtons/customSpeedDialStyle";
import { makeStyles } from '@material-ui/core/styles';

interface ICustomSpeedDialProps {
    icon?: React.ReactNode;
}

// @ts-ignore
const useStyles = makeStyles(styles);

const CustomSpeedDial = ({
    icon,
}: ICustomSpeedDialProps) => {

    let navigate = useNavigate();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        setOpen(false)
    };

    const contactMe = () => {
        navigate('/contact-me')
    }
    const share = () => { }

    return (
        <div className={classes.customSpeedDialWrapper}>
            <Backdrop open={open} />
            <Draggable >
                <SpeedDial
                    ariaLabel="SpeedDial"
                    icon={<SpeedDialIcon />}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={open}
                    direction={'down'}
                    color='primary'
                    className={classes.speedDial}
                >
                    <SpeedDialAction
                        key={'Share'}
                        icon={<ShareIcon />}
                        tooltipTitle={'Share'}
                        tooltipOpen
                        onClick={share}
                    />
                    <SpeedDialAction
                        className={classes.customSpeedDialWrapper}
                        key={'Contact-me'}
                        icon={<ContactMailIcon />}
                        tooltipTitle={'Contact Me'}
                        tooltipOpen
                        onClick={contactMe}
                    />
                </SpeedDial>
            </Draggable>

        </div>
    )
}

export default CustomSpeedDial;
