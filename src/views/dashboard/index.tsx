import styles from "../../assets/jss/views/dashboard/dashboardStyle";
import { makeStyles } from '@material-ui/core/styles';
import CustomTab, { TabType } from "../../components/CustomTab";
import { useDispatch, useSelector } from "react-redux";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import { useEffect } from 'react';
import actions from "../../redux/modules/settings/selectedTab/actions";
import { TabName } from "../../utils/constants/tabName";
import FloatingActionButton from "../../components/CustomButtons/CustomSpeedDial";

// @ts-ignore
const useStyles = makeStyles(styles);

const Dashboard = () => {

    const classes = useStyles();
    const myData = useSelector((state: types.redux.IState) => state.myData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.setTab(TabName.DASHBOARD))
    }, [])

    return (
        <div className={classes.dashboardWrapper}>
            <CustomTab tabType={TabType.PERSONAL_DATA} title={myData.personalData.name} icon={<PersonOutlinedIcon className={classes.icon} />} />
            <CustomTab tabType={TabType.EXPERIENCE} title={myData.experience.name} icon={<WorkHistoryOutlinedIcon className={classes.icon} />} />
            <CustomTab tabType={TabType.EDUCATION} title={myData.education.name} icon={<SchoolOutlinedIcon className={classes.icon} />} />
            <CustomTab tabType={TabType.INTERESTS} title={myData.interests.name} icon={<SportsSoccerOutlinedIcon className={classes.icon} />} />
            <div className={classes.button}>
                <FloatingActionButton />
            </div>
        </div>
    )
}
export default Dashboard;
