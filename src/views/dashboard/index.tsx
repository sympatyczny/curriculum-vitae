import styles from "../../assets/jss/views/dashboard/dashboardStyle";
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import CustomTab, { TabType } from "../../components/CustomTab";
import { useSelector } from "react-redux";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';

// @ts-ignore
const useStyles = makeStyles(styles);

const Dashboard = () => {

    const classes = useStyles();
    const myData = useSelector((state: types.redux.IState) => state.myData);

    return (
        <div className={classes.dashboardWrapper}>
            <div className={classes.tabLine}>
                <CustomTab tabType={TabType.EXPERIENCE} title={myData.experience.name} icon={<WorkHistoryOutlinedIcon />} />
                <CustomTab tabType={TabType.PERSONAL_DATA} title={myData.personalData.name} icon={<PersonOutlinedIcon />} />
            </div>
            <div className={classes.tabLine}>
                <CustomTab tabType={TabType.EDUCATION} title={myData.education.name} icon={<SchoolOutlinedIcon />} />
                <CustomTab tabType={TabType.INTERESTS} title={myData.interests.name} icon={<SportsSoccerOutlinedIcon />} />
            </div>
        </div>)
}
export default Dashboard;
