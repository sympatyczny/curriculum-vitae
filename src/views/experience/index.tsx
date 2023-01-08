import styles from "../../assets/jss/views/experience/experienceStyle";
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { Collapse, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs/CustomBreadcrumbs";
import { TabName } from '../../utils/constants/tabName';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';

// @ts-ignore
const useStyles = makeStyles(styles);

const Experience = () => {

    const classes = useStyles();

    const experience = useSelector((state: types.redux.IState) => state.myData.experience);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className={classes.IconBreadcrumbsWrapper}>
                <CustomBreadcrumbs tabName={TabName.EXPERIENCE} icon={<WorkHistoryOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />} />
            </div>
            <div className={classes.experienceWrapper}>
                {experience.workPlace.map((exp: any) => (
                    <div className={classes.workPlaceWrapper}>
                        <div className={classes.workPlaceNameWrapper}>
                            <Typography variant="h2" marginTop={2}>
                                {exp.workplaceName}
                            </Typography>
                        </div>
                        <div className={classes.workDurationWrapper}>
                            <Typography variant="caption" marginTop={2}>
                                {exp.startDate + " -> " + exp.endDate}
                            </Typography>
                        </div>
                        <Divider />
                        <div className={classes.workPositionWrapper}>
                            <Typography variant="subtitle1" marginTop={3} display="inline">
                                position:
                            </Typography>
                            <Typography variant="subtitle1" marginTop={3} fontWeight="bold" display="inline">
                                {exp.position}
                            </Typography>
                        </div>
                        <div className={classes.jobDescriptionWrapper}>
                            <Typography variant="body1" marginTop={3} display="inline" align="justify">
                                {exp.jobDescription}
                            </Typography>
                        </div>
                        <div className={classes.skillsWrapper}>
                            <List sx={{ width: 150 }}>
                                <ListItemButton onClick={handleClick}>
                                    <ListItemText primary="used skills: " />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {exp.skills.map((skill: any) => (
                                            <ListItemButton sx={{ pl: 3 }}>
                                                <ListItemText primary={skill.skillName} />
                                            </ListItemButton>
                                        ))}
                                    </List>
                                </Collapse>
                            </List>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Experience;
