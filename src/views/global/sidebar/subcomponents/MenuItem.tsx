import { MenuItem } from "react-pro-sidebar";
import { Typography, useTheme } from '@mui/material';
import { Link } from "react-router-dom";
import { tokens, useMode } from "../../../../theme";
import { makeStyles } from '@material-ui/core/styles';
import styles from "../../../../assets/jss/views/global/sidebar/subcomponents/menuItemStyle";

// @ts-ignore
const useStyles = makeStyles(styles);

interface ICustomMenuItemProps {
    title?: string;
    to: string;
    icon?: string | React.ReactElement;
    selected?: string;
    setSelected?: Function | any;
}

export const CustomMenuItem = ({
    title,
    to,
    icon,
    selected,
    setSelected, }: ICustomMenuItemProps) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = useStyles();

    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};
