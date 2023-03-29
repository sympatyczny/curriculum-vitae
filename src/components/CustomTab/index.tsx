import styles from "../../assets/jss/views/components/customTab/customTabStyle";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

// @ts-ignore
const useStyles = makeStyles(styles);

export enum TabType {
    EDUCATION = 'EDUCATION',
    EXPERIENCE = 'EXPERIENCE',
    INTERESTS = 'INTERESTS',
    PERSONAL_DATA = 'PERSONAL_DATA',
}

interface ICustomMTabProps {
    title?: string;
    tabType: string;
    icon?: React.ReactNode;
}

const CustomTab = ({
    title,
    tabType,
    icon,
}: ICustomMTabProps) => {

    const classes = useStyles();
    const [path, setPath] = useState('');
    let navigate = useNavigate();

    const routeChange = (tabType: string) => {

        switch (tabType) {
            case TabType.EDUCATION:
                return (
                    setPath('/education'),
                    navigate('/education')
                );
            case TabType.EXPERIENCE:
                return (
                    setPath('/experience'),
                    navigate('/experience')
                );
            case TabType.INTERESTS:
                return (
                    setPath('/interests'),
                    navigate('/interests')
                );
            case TabType.PERSONAL_DATA:
                return (
                    setPath('/personal-data'),
                    navigate('/personal-data')
                );
            default: (
                setPath('/')
            )
        }
    }

    return (
        <div className={classes.tabWrapper}>
            <Button className={classes.tabButton} onClick={() => routeChange(tabType)} color="inherit">
                <Typography className={classes.tabTitle} variant="h1" marginTop={2} >
                    {title}
                </Typography>
                {icon}
            </Button>
        </div>
    )
}
export default CustomTab;
