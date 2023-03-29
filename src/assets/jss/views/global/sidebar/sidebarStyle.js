const sidebarStyle = () => ({

    sidebarWrapper: {
        "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
            color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
            color: "#6870fa !important",
        },
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        ml: "15px",
    },
    subtitle: {
        margin: "15px 0 5px 0px",
    },

});

export default sidebarStyle;
