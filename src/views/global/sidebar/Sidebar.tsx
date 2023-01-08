import { useState } from "react";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from "../../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "react-pro-sidebar/dist/css/styles.css";
import piotr from "../../../assets/img/piotr.jpg";
import styles from "../../../assets/jss/views/global/sidebar/sidebarStyle";
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { CustomMenuItem } from "./subcomponents/MenuItem";
import { TabName } from '../../../utils/constants/tabName';
import { useSelector } from "react-redux";

// @ts-ignore
const useStyles = makeStyles(styles);

const Sidebar = () => {

    const classes = useStyles();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    const personalData = useSelector((state: types.redux.IState) => state.myData.personalData.informations);

    return (
        <Box className={classes.sidebarWrapper}
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                // "& .pro-icon-wrapper": {
                //     backgroundColor: "transparent !important",
                // },
                // "& .pro-inner-item": {
                //     padding: "5px 35px 5px 20px !important",
                // },
                // "& .pro-inner-item:hover": {
                //     color: "#868dfb !important",
                // },
                // "& .pro-menu-item.active": {
                //     color: "#6870fa !important",
                // },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu>
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon sx={{ fontSize: 30 }} /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box className={classes.title} >
                                <Typography variant="h6" color={colors.grey[100]}>
                                    {"Curriculum Vitae"}
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOpenOutlinedIcon sx={{ fontSize: 30 }} />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={piotr}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography variant="h4" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>
                                    {personalData.firstName + " " + personalData.lastName}
                                </Typography>
                                <Typography variant="h6" color={colors.greenAccent[500]} >
                                    {"FrontEnd Developer"}
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <CustomMenuItem
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon sx={{ fontSize: 30 }} />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        {!isCollapsed && <div className={classes.subtitle}>
                            <Typography variant="h3" color={colors.grey[300]}
                            >
                                {"Work"}
                            </Typography>
                        </div>
                        }
                        <CustomMenuItem
                            title={TabName.EXPERIENCE}
                            to="/experience"
                            icon={<WorkHistoryOutlinedIcon sx={{ fontSize: 30 }} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        {!isCollapsed && <div className={classes.subtitle}>
                            <Typography variant="h3" color={colors.grey[300]} >
                                {"Life"}
                            </Typography>
                        </div>
                        }
                        <CustomMenuItem
                            title={TabName.PERSONAL_DATA}
                            to="/personal-data"
                            icon={<PersonOutlinedIcon sx={{ fontSize: 30 }} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <CustomMenuItem
                            title={TabName.EDUCATION}
                            to="/education"
                            icon={<SchoolOutlinedIcon sx={{ fontSize: 30 }} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        {!isCollapsed && <div className={classes.subtitle}>
                            <Typography variant="h3" color={colors.grey[300]} >
                                {"Balance"}
                            </Typography>
                        </div>
                        }
                        <CustomMenuItem
                            title={TabName.INTERESTS}
                            to="/interests"
                            icon={<SportsSoccerOutlinedIcon sx={{ fontSize: 30 }} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};
export default Sidebar;
