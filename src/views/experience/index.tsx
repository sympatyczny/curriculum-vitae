import styles from "../../assets/jss/views/experience/experienceStyle";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Collapse, Divider, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs/CustomBreadcrumbs";
import { TabName } from '../../utils/constants/tabName';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import actions from "../../redux/modules/api/myData/experience/actions";
import ConditionalRender from "../../components/ConditionalRender/ConditionalRender";
import selectTabActions from "../../redux/modules/settings/selectedTab/actions";
import CustomSpeedDial from "../../components/CustomButtons/CustomSpeedDial";
import CustomFloatingAction from "../../components/CustomButtons/CustomFloatingAction";

// @ts-ignore
const useStyles = makeStyles(styles);

const Experience = () => {

    const classes = useStyles();

    const experience = useSelector((state: types.redux.IState) => state.myData.experience);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(selectTabActions.setTab(TabName.EXPERIENCE))
    }, [])

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        fetch("/api/experience")
            .then((response) => response.json())
            .then((data) => dispatch(actions.set(data.experience)));
    }, [])

    return (
        <>
            <div className={classes.IconBreadcrumbsWrapper}>
                <CustomBreadcrumbs tabName={TabName.EXPERIENCE}
                    icon={<WorkHistoryOutlinedIcon
                        sx={{ mr: 0.5 }}
                        fontSize="inherit"
                    />}
                />
            </div>

            <ConditionalRender
                show={experience.workPlace[0].id}
                onTrue={() => (
                    <div className={classes.experienceWrapper}>
                        <div className={classes.button}>
                            <CustomSpeedDial />
                        </div>
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
                                                {exp.skills && exp.skills.map((skill: any) => (
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
                        <CustomFloatingAction />
                    </div>
                )}
                onFalse={() => (
                    <div className={classes.experienceProgressWrapper} >
                        <CircularProgress color="inherit" />
                    </div>
                )}
            />

        </>
    )
}
export default Experience;
