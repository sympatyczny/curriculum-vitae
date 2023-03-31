import { useEffect, useState } from "react";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from "../../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "react-pro-sidebar/dist/css/styles.css";
import piotr from "../../../assets/img/piotr.jpg";
import styles from "../../../assets/jss/views/global/sidebar/sidebarStyle";
import { makeStyles } from '@material-ui/core/styles';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { CustomMenuItem } from "./subcomponents/MenuItem";
import { TabName } from '../../../utils/constants/tabName';
import { useDispatch, useSelector } from "react-redux";
import selectedTabActions from "../../../redux/modules/settings/selectedTab/actions";
import collapseSidebarActions from "../../../redux/modules/settings/collapsedSidebar/actions";

// @ts-ignore
const useStyles = makeStyles(styles);

const Sidebar = () => {

    const classes = useStyles();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const selectedTab = useSelector((state: types.redux.IState) => state.settings.selectedTab.selectedTab);
    const collapsedSidebar = useSelector((state: types.redux.IState) => state.settings.collapsedSidebar.collapsedSidebar);
    const personalData = useSelector((state: types.redux.IState) => state.myData.personalData.information);
    const [isCollapsed, setIsCollapsed] = useState(collapsedSidebar);
    const [selected, setSelected] = useState(selectedTab);
    const dispatch = useDispatch();

    const setSelectedTab = (tab: string) => {
        dispatch(selectedTabActions.setTab(tab))
    }

    useEffect(() => {
        setSelected(selectedTab);
    }, [selectedTab])

    const setCollapse = (collapse: boolean) => {
        dispatch(collapseSidebarActions.collapseSidebar(collapse))
        window.localStorage.setItem('collapsed', collapse.toString())
    }

    useEffect(() => {
        setIsCollapsed(collapsedSidebar)
    }, [collapsedSidebar])


    return (
        <Box className={classes.sidebarWrapper}
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed} breakPoint='sm'>
                <Menu>
                    <MenuItem
                        onClick={() => setCollapse(!isCollapsed)}
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
                                <IconButton onClick={() => setCollapse(!isCollapsed)}>
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
                                    height="120px"
                                    src={piotr}
                                    style={{ cursor: "pointer", borderRadius: "8%" }}
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
                            setSelected={setSelectedTab}
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
                            setSelected={setSelectedTab}
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
                            setSelected={setSelectedTab}
                        />
                        <CustomMenuItem
                            title={TabName.EDUCATION}
                            to="/education"
                            icon={<SchoolOutlinedIcon sx={{ fontSize: 30 }} />}
                            selected={selected}
                            setSelected={setSelectedTab}
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
                            setSelected={setSelectedTab}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};
export default Sidebar;
