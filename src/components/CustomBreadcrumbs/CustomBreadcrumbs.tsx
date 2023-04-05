import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import styles from "../../assets/jss/views/components/customBreadcrumbs/customBreadcrumbsStyle";

interface ICustomBreadcrumbs {
  tabName: string;
  icon?: React.ReactNode;
}

// @ts-ignore
const useStyles = makeStyles(styles);

const CustomBreadcrumbs = ({
  tabName,
  icon,
}: ICustomBreadcrumbs) => {

  const classes = useStyles();

  return (
    <div>
      <Breadcrumbs separator="›" maxItems={2} aria-label="breadcrumb">
        <NavLink to=".." className={classes.dashboardLink}>
          <Typography variant='h6' color="text.primary">
            <HomeOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {"Dashboard"}
          </Typography>
        </NavLink>

        <Typography sx={
          {
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'underline',
          }}
          color="text.primary"
        >
          {icon}
          {tabName}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
export default CustomBreadcrumbs;
