import React, {useState} from "react";
import './contacts.sass'
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import Button from "@material-ui/core/Button";
import EmailIcon from '@material-ui/icons/Email';
import img from '../../img/formSamurai.jpg'
import {Fade} from "react-reveal";
import Typography from "@material-ui/core/Typography";
import {connect} from "react-redux";
import {sendMessage, disableMessageSuccess} from "../../redux/contactReducer";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
    root: {
        padding: '120px 20px 60px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'space-between',

    },
    h2: {
        position: 'absolute',
        top: 0
    },
    formWrap: {
        width: 600,
        flexShrink: 0,
        zIndex: 2,
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: theme.spacing(4)
    },
    margin: {
        marginBottom: 40,
        width: '100%'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: 'rgba(255,255,255,.8)',
    },
    img: {
        marginLeft: 20,
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }
}));
const Contacts = ({sendMessage, isLoading, isSendMessageSuccess, disableMessageSuccess}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const handleChangeName = (e) => {
        setName(e.target.value);
        setError(false);
    };
    const handleChangePhone = (e) => {
        setPhone(e.target.value);
        setError(false);
    };
    const handleChangeMessage = (e) => {
        setMessage(e.target.value);
        setError(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if(name && phone && message) {
            sendMessage(name, phone, message);
            setName('');
            setPhone('');
            setMessage('');
        }
        else{
            setError(true)
        }
    }
    const handleSubmitYet = (e) =>{
        e.preventDefault();
        disableMessageSuccess()
    }
    const classes = useStyles();

    return (
        <div id='contacts' className={` contacts ${classes.root}`}>

            <h2 style={{opacity: .4}} className={`title titleDefault ${classes.h2}`}>連絡先</h2>
            <Paper elevation={3} className={classes.formWrap}>
                {isSendMessageSuccess &&
                <div className={"formSuccess"}>
                    <Typography variant="h6">The message was sent successfully</Typography>
                   <Fade bottom><Button onClick={handleSubmitYet} size="small" color="primary" className={classes.button}>Send message yet</Button></Fade>
                </div>
                }
                <Backdrop className={classes.backdrop} open={isLoading} >
                    <CircularProgress color="inherit" />
                </Backdrop>
                <form action="" className={classes.form}>
                    {error && <Typography>Please input all fields</Typography>}
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="input-name">Your name</InputLabel>
                        <Input
                            onChange={handleChangeName}
                            id="input-name"
                            value={name}
                            error = {error}
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle/>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="input-phone">Your phone</InputLabel>
                        <Input
                            onChange={handleChangePhone}
                            id="input-phone"
                            value={phone}
                            error = {error}
                            type={"number"}
                            startAdornment={
                                <InputAdornment position="start">
                                    <PhoneIcon/>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="input-message">Your message</InputLabel>
                        <Input
                            onChange={handleChangeMessage}
                            value={message}
                            error = {error}
                            id="input-message"
                            startAdornment={
                                <InputAdornment position="start">
                                    <EmailIcon/>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Button onClick={handleSubmit} size="small" color="primary" className={classes.button}>Send message</Button>
                </form>
            </Paper>
            <div className={classes.img}>
               <Fade right>
                   <img src={img} alt=""/>
               </Fade>
            </div>
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        name: state.contact.name,
        isLoading: state.contact.isLoading,
        isSendMessageError: state.contact.isSendMessageError,
        isSendMessageSuccess: state.contact.isSendMessageSuccess
    }
}
export default connect(mapStateToProps , {sendMessage, disableMessageSuccess})(Contacts)