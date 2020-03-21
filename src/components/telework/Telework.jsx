import React from 'react'
import './telework.sass'
import img from '../../img/samurai-voiny-zima-asia-legends-david-benzal-aziia-iaponiia.jpg'
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
      display: 'flex',

    },
    button: {
        width: 350,
        minHeight: 65,
        border: '3px solid #CF411D',
        color: '#CF411D',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
        fontWeight: 400,
        flexShrink: 0,
        fontSize: '32px',
        marginRight: 10
    },
    buttonInverse: {
        backgroundColor: '#CF411D',
        color: '#fff',
        '&:hover': {
            color: '#CF411D'
        }
    },
    descr: {
        marginTop: '-30px',
        marginBottom: '40px'
    }
})
const Telework = (props) =>{
    const styles = {
        backgroundImage: `url(${img})`,
    }
    const classes = useStyles()
    return(
        <section className={`container telework`} style={styles} >
            <h2 className={`title`}>Hire me to work</h2>
            <Typography variant="h3" className={classes.descr}>リモートで</Typography>
            <div aria-label="Select" className={classes.root}>
                <Button className={classes.button}>Contact with me</Button>
                <Button className={classes.button + ' ' +classes.buttonInverse}>Hire me</Button>
            </div>
        </section>
    )
}
export default Telework;