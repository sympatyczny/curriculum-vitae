import styles from "../../assets/jss/views/personalData/personalDataStyle";
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useEffect, useState } from "react";
import ConditionalRender from "../../components/ConditionalRender/ConditionalRender";
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs/CustomBreadcrumbs";
import { TabName } from '../../utils/constants/tabName';
import actions from "../../redux/modules/api/myData/personalData/actions";
import selectTabActions from "../../redux/modules/settings/selectedTab/actions";

// @ts-ignore
const useStyles = makeStyles(styles);

const PersonalData = () => {

    const classes = useStyles();
    const personalData = useSelector((state: types.redux.IState) => state.myData.personalData);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(selectTabActions.setTab(TabName.PERSONAL_DATA))
    }, [])

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        fetch("/api/personal-data")
            .then((response) => response.json())
            .then((data) => dispatch(actions.set(data)));
    }, [])

    return (
        <>
            <div className={classes.IconBreadcrumbsWrapper}>
                <CustomBreadcrumbs tabName={TabName.PERSONAL_DATA} icon={<PersonOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />} />
            </div>
            <ConditionalRender
                show={personalData.information.firstName}
                onTrue={() => (
                    <div className={classes.personalDataWrapper}>
                        <div className={classes.InformationsWrapper}>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <BadgeOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={personalData.information.firstName + " " + personalData.information.lastName} />
                                    </ListItemButton>
                                </ListItem>
                                <a className={classes.target} target="_blank" href={`mailto:${personalData.information.emailAddress}`}>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <AlternateEmailIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={personalData.information.emailAddress} />
                                        </ListItemButton>
                                    </ListItem>
                                </a>
                                <a className={classes.target} target="_blank" href={`tel:${personalData.information.emailAddress}`}>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <PhoneOutlinedIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={personalData.information.phoneNumber} />
                                        </ListItemButton>
                                    </ListItem>
                                </a>
                                <a className={classes.target} target="_blank" href={`https://www.${personalData.information.linkedin}`}>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <LinkedInIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={personalData.information.linkedin} />
                                        </ListItemButton>
                                    </ListItem>
                                </a>
                                <a className={classes.target} target="_blank" href={`https://www.${personalData.information.gitRepository}`}>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <GitHubIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={personalData.information.gitRepository} />
                                        </ListItemButton>
                                    </ListItem>
                                </a>
                                <ConditionalRender
                                    show={personalData.information.personalDescription}
                                    onTrue={() => (
                                        <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <ListItemButton onClick={handleClick}>
                                                <ListItemText primary="information about me: " />
                                                {open ? <ExpandLess /> : <ExpandMore />}
                                            </ListItemButton>
                                            <Collapse in={open} timeout="auto" unmountOnExit orientation="horizontal">
                                                <List component="div" disablePadding>
                                                    <ListItemButton sx={{ pl: 3 }}>
                                                        <ListItemText primary={personalData.information.personalDescription} />
                                                    </ListItemButton>
                                                </List>
                                            </Collapse>
                                        </ListItem>
                                    )}
                                />
                            </List>
                        </div>
                    </div>
                )}
                onFalse={() => (
                    <h3>Loading...</h3>
                )}
            />
        </>
    )
}
export default PersonalData;
