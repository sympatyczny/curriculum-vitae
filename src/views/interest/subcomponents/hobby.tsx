import styles from "../../../assets/jss/views/interest/interestStyle";
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@mui/material";

// @ts-ignore
const useStyles = makeStyles(styles);

interface IHobbyProps {
    interestName: string;
    interestDescription?: string;
    icon?: React.ReactNode;
}

const Hobby = ({
    interestName,
    interestDescription,
    icon,
}: IHobbyProps) => {


    const classes = useStyles();

    return (
        <div className={classes.hobbyWrapper}>
            <div className={classes.interestNameWrapper}>
                <Typography variant="h2" marginTop={2}>
                    {interestName}
                </Typography>
            </div>
            <div className={classes.interestBodyWrapper}>
                <div className={classes.interestDescriptionWrapper}>
                    <Typography variant="body1" marginTop={3} display="inline" align="justify">
                        {interestDescription}
                    </Typography>
                </div>
                <div className={classes.iconWrapper}>
                    {icon}
                </div>
            </div>
        </div>
    )
}
export default Hobby;
