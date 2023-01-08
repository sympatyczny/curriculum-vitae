import styles from "../../assets/jss/views/interest/interestStyle";
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import Hobby from "./subcomponents/hobby";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs/CustomBreadcrumbs";
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import { TabName } from '../../utils/constants/tabName';

// @ts-ignore
const useStyles = makeStyles(styles);

export enum InterestName {
    BOOKS = 'Books',
    HIKING = 'Hiking',
    FINANCIAL_MARKETS = 'Financial markets',
}

const Interest = () => {

    const classes = useStyles();
    const interests = useSelector((state: types.redux.IState) => state.myData.interests);

    const getIcon = (interestName: string) => {

        switch (interestName) {
            case InterestName.BOOKS:
                return (
                    <AutoStoriesOutlinedIcon sx={{ fontSize: 100 }} />
                );
            case InterestName.HIKING:
                return (
                    <HikingOutlinedIcon sx={{ fontSize: 100 }} />
                );
            case InterestName.FINANCIAL_MARKETS:
                return (
                    <ShowChartOutlinedIcon sx={{ fontSize: 100 }} />
                );
            default: (
                <StarBorderOutlinedIcon sx={{ fontSize: 100 }} />
            )
        }
    }

    return (
        <>
            <div className={classes.IconBreadcrumbsWrapper}>
                <CustomBreadcrumbs tabName={TabName.INTERESTS} icon={<SportsSoccerOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />} />
            </div>
            <div className={classes.interestWrapper}>
                {interests.hobby.map((hobby: any) => (
                    <Hobby interestName={hobby.interestName} interestDescription={hobby.interestDescription} icon={getIcon(hobby.interestName)} />
                ))}
            </div>
        </>
    )
}
export default Interest;
