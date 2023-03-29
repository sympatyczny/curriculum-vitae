import styles from "../../assets/jss/views/interest/interestStyle";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import Hobby from "./subcomponents/hobby";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs/CustomBreadcrumbs";
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import { TabName } from '../../utils/constants/tabName';
import ConditionalRender from "../../components/ConditionalRender/ConditionalRender";
import { useEffect } from "react";
import actions from "../../redux/modules/api/myData/interest/actions";
import selectTabActions from "../../redux/modules/settings/selectedTab/actions";

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
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(selectTabActions.setTab(TabName.INTERESTS))
    }, [])

    useEffect(() => {
        fetch("/api/interests")
            .then((response) => response.json())
            .then((data) => dispatch(actions.set(data.interests)));
    }, [])

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

            <ConditionalRender
                show={interests.hobby[0].id}
                onTrue={() => (
                    <div className={classes.interestWrapper}>
                        {interests.hobby.map((hobby: any) => (
                            <Hobby interestName={hobby.interestName} interestDescription={hobby.interestDescription} icon={getIcon(hobby.interestName)} />
                        ))}
                    </div>
                )}
                onFalse={() => (
                    <h3>Loading...</h3>
                )}
            />
        </>
    )
}
export default Interest;
