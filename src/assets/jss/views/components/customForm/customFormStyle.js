
const customForm = (theme) => ({
    customForm: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '100px',
        zIndex: '0',
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        },
    },
});

export default customForm;
