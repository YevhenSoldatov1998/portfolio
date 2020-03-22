import React from "react";
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
    button: {},
    img: {
        marginLeft: 20,
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }
}))
const Contacts = () => {
    const classes = useStyles()
    return (
        <div className={` contacts ${classes.root}`}>
            <h2 style={{opacity: .4}} className={`title titleDefault ${classes.h2}`}>連絡先</h2>
            <Paper elevation={3} className={classes.formWrap}>
                <form action="" className={classes.form}>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="input-name">Your name</InputLabel>
                        <Input
                            id="input-name"
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
                            id="input-phone"
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
                            id="input-message"
                            startAdornment={
                                <InputAdornment position="start">
                                    <EmailIcon/>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Button size="small" color="primary" className={classes.button}>Send message</Button>
                </form>
            </Paper>
            <div className={classes.img}>
                <img src={img} alt=""/>
            </div>
        </div>

    )
}
export default Contacts