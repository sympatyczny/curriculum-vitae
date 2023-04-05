import { Button, InputAdornment, Snackbar, Stack, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import styles from "../../assets/jss/views/components/customForm/customFormStyle";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { AccountCircle } from "@mui/icons-material";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import emailjs from '@emailjs/browser';
import { Emailjs } from '../../utils/constants/emailjs';

interface ICustomFormProps {
    type?: any
}

// @ts-ignore
const useStyles = makeStyles(styles);

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomForm = ({
    type,
}: ICustomFormProps) => {

    const classes = useStyles();
    let navigate = useNavigate();
    const form = useRef<any>();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [question, setQuestion] = useState('')
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const clearForm = () => {
        setFirstName("")
        setLastName("")
        setEmail("")
        setQuestion("")
    }

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();

        emailjs.sendForm(Emailjs.SERVICE_ID, Emailjs.TEMPLATE_ID, form.current, Emailjs.PUBLIC_KEY)
            .then(() => {
                setEmailError(false);
                clearForm();
                setOpenSnackBar(true)
            }, () => {
                setEmailError(true);
                setOpenSnackBar(true);
            });
    }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackBar(false);
        !emailError && navigate("..")
    };

    return (
        <>
            <form ref={form} onSubmit={handleSubmit} className={classes.customForm}>
                <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                    <TextField
                        name='from_name'
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        name='from_name'
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        fullWidth
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Stack>
                <TextField
                    id="reply_to"
                    name="reply_to"
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                    sx={{ mb: 4 }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AlternateEmailIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    id="message"
                    name="message"
                    label="Your question:"
                    variant="outlined"
                    color="secondary"
                    multiline
                    type='text'
                    rows={4}
                    defaultValue="Default Value"
                    sx={{ mb: 4 }}
                    fullWidth
                    required
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LiveHelpIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button variant="contained" color="success" type="submit">Send</Button>
            </form>
            <Snackbar open={openSnackBar} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={emailError ? "error" : "success"} sx={{ width: '100%' }}>
                    {emailError ? "Something went wrong! Try again later." : "Message was sent!"}
                </Alert>
            </Snackbar>
        </>
    )
}

export default CustomForm;
