import styles from "../../assets/jss/views/contactMe/contactMeStyle";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import actions from "../../redux/modules/settings/selectedTab/actions";
import { TabName } from "../../utils/constants/tabName";
import CustomSpeedDial from "../../components/CustomButtons/CustomSpeedDial";
import CustomFloatingAction from "../../components/CustomButtons/CustomFloatingAction";
import CustomForm from "../../components/CustomForm/CustomForm";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

// @ts-ignore
const useStyles = makeStyles(styles);

const ContactMe = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.setTab(TabName.CONTACT_ME))
    }, [])

    return (
        <div className={classes.contactMeWrapper}>
            <div className={classes.button}>
                <CustomSpeedDial />
            </div>
            <Typography variant="h2" marginTop={2}>
                Contact Me!
            </Typography>
            <CustomForm />
            <div className={classes.additionalInfo}>
                <small>Additional information: <Link to="../personal-data" className={classes.link}>About me</Link></small>
            </div>
            <CustomFloatingAction />
        </div>
    )
}
export default ContactMe;
