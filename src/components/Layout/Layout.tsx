import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import styles from "../../assets/jss/views/components/Layout/layoutStyle";
import { makeStyles } from '@material-ui/core/styles';

// @ts-ignore
const useStyles = makeStyles(styles);

const Layout = () => {

    const classes = useStyles()

    return (
        <div className={classes.layout}>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;
