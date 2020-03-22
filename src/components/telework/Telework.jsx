import React from 'react'
import './telework.sass'
import img from '../../img/samurai-voiny-zima-asia-legends-david-benzal-aziia-iaponiia.jpg'
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.down('xs')]: {
            alignItems: 'center'
        }
    },
    button: {
        width: 310,
        minHeight: 55,
        border: '3px solid #3f51b5',
        color: '#3f51b5',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
        fontWeight: 400,
        flexShrink: 0,
        fontSize: '22px',
        marginRight: 10,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 20,
            marginRight: 0
        }
    },
    buttonInverse: {
        backgroundColor: '#3f51b5',
        color: '#fff',
        '&:hover': {
            color: '#3f51b5'
        }
    },
    descr: {
        marginTop: '-30px',
        marginBottom: '40px',
        pointerEvents: 'none'
    }
}))
const Telework = (props) => {
    const styles = {
        backgroundImage: `url(${img})`,
    }
    const classes = useStyles()
    return (
        <section className={`container telework`} style={styles}>
            <div className="blur"></div>
            <h2 className={`title titleDefault`}>Hire me to work</h2>
            <Typography variant="h3" className={classes.descr}>リモートで</Typography>
            <div aria-label="Select" className={classes.root}>
                <Button className={classes.button}>Contact with me</Button>
                <Button className={classes.button + ' ' + classes.buttonInverse}>Hire me</Button>
            </div>
        </section>
    )
}
export default Telework;