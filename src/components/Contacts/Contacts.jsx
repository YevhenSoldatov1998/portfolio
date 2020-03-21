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
import img from '../../img/formSamurai.jpg'
const useStyles = makeStyles(theme => ({
    root: {
        padding: '120px 0',
        display: 'flex'
    },

    formWrap: {
        width: 700
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(4)
    },
    margin: {
        marginBottom: 40
    }
}))
const Contacts = (props) => {
    const classes = useStyles()
    return (
        <div className={`container contacts ${classes.root}`}>
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
                    <Button>Send message</Button>
                </form>
            </Paper>
            <div>
                <img src={img} alt=""/>
            </div>
        </div>

    )
}
export default Contacts