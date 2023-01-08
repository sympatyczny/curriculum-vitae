import styles from "../../assets/jss/views/personalData/personalDataStyle";
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import ConditionalRender from "../../components/ConditionalRender/ConditionalRender";
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs/CustomBreadcrumbs";
import { TabName } from '../../utils/constants/tabName';

// @ts-ignore
const useStyles = makeStyles(styles);

const PersonalData = () => {

    const classes = useStyles();

    const personalInformations = useSelector((state: types.redux.IState) => state.myData.personalData.informations);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className={classes.IconBreadcrumbsWrapper}>
                <CustomBreadcrumbs tabName={TabName.PERSONAL_DATA} icon={<PersonOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />} />
            </div>
            <div className={classes.personalDataWrapper}>
                <div className={classes.InformationsWrapper}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <BadgeOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary={personalInformations.firstName + " " + personalInformations.lastName} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AlternateEmailIcon />
                                </ListItemIcon>
                                <ListItemText primary={personalInformations.emailAddress} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PhoneOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary={personalInformations.phoneNumber} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LinkedInIcon />
                                </ListItemIcon>
                                <ListItemText primary={personalInformations.linkedin} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <GitHubIcon />
                                </ListItemIcon>
                                <ListItemText primary={personalInformations.gitRepository} />
                            </ListItemButton>
                        </ListItem>
                        <ConditionalRender
                            show={!!personalInformations.personalDescription}
                            onTrue={() => (
                                <ListItem disablePadding>
                                    <ListItemButton onClick={handleClick}>
                                        <ListItemText primary="information about me: " />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItemButton sx={{ pl: 3 }}>
                                                <ListItemText primary={personalInformations.personalDescription} />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                </ListItem>
                            )}
                        />
                    </List>
                </div>
            </div>
        </>
    )
}
export default PersonalData;
