import styles from "../../assets/jss/views/education/educationStyle";
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { Divider, Typography } from "@mui/material";
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs/CustomBreadcrumbs";
import { TabName } from '../../utils/constants/tabName';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

// @ts-ignore
const useStyles = makeStyles(styles);

const Education = () => {

    const classes = useStyles();

    const education = useSelector((state: types.redux.IState) => state.myData.education);

    return (
        <>
            <div className={classes.IconBreadcrumbsWrapper}>
                <CustomBreadcrumbs tabName={TabName.EDUCATION} icon={<SchoolOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />} />
            </div>
            <div className={classes.educationWrapper}>
                {education.schools.map((school: any) => (
                    <div className={classes.schoolWrapper}>
                        <div className={classes.schoolNameWrapper}>
                            <Typography variant="h2" marginTop={2}>
                                {school.name}
                            </Typography>
                        </div>
                        <div className={classes.facultyWrapper}>
                            <Typography variant="h5" marginTop={2}>
                                {school.faculty}
                            </Typography>
                        </div>
                        <div className={classes.schoolDurationWrapper}>
                            <Typography variant="caption" marginTop={2}>
                                {school.startDate + " -> " + school.endDate}
                            </Typography>
                        </div>
                        <Divider />
                        <div className={classes.schoolTypeWrapper}>
                            <Typography variant="subtitle1" marginTop={3} display="inline">
                                type:
                            </Typography>
                            <Typography variant="subtitle1" marginTop={3} fontWeight="bold" display="inline">
                                {school.schoolType}
                            </Typography>
                        </div>
                        <div className={classes.courseWrapper}>
                            <Typography variant="subtitle1" marginTop={3} fontWeight="bold" display="inline">
                                {school.course}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Education;
