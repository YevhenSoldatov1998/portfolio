import React from 'react'
import style from './header.module.sass'
import {Navbar} from "./Navbar/Navbar";
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import * as PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import {NavLink} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import Divider from "@material-ui/core/Divider";
function HideOnScroll(props) {
    const {children, window} = props;
    const trigger = useScrollTrigger({target: window ? window() : undefined});

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};
const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 70,
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        background: 'rgba(0,0,0, 0.8)',
        zIndex: 30
    },
    list: {
        width: 250,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    fullList: {
        width: 'auto',
    },
    link: {
        color: '#333',
        fontSize: 18,
        textDecoration: 'none',
        marginBottom: 10,
        display: 'inline-flex',
        alignItems: 'center'
    },
    menuIcon: {
        color: '#fff'
    }


})
const Header = (props) => {

    const classes = useStyles();
    const [state, setState] = React.useState(false);
    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    }
    return (
        <>
            <CssBaseline/>
            <HideOnScroll {...props}>
                <AppBar className={classes.root}>

                    <div className={style.logo_wrap}>
                        <div className={style.logo}></div>
                        <div className={style.name}><span> Y</span>.Soldatov</div>
                    </div>
                    <Box display={{xs: 'block', sm: 'none'}}>
                        <Button color="primary" onClick={toggleDrawer(true)}><MenuIcon className={classes.menuIcon}/></Button>
                        <Drawer open={state} onClose={toggleDrawer(false)}>
                            <List
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                className={classes.list}
                                >
                                {props.nav.map(a =>
                                    <ListItem button key={a.id}>
                                        <NavLink  className={classes.link} to={a.link.toLowerCase()}>
                                            <Typography>{a.link}</Typography>
                                        </NavLink>
                                    </ListItem>
                                    )}
                            </List>
                        </Drawer>
                    </Box>
                    <Box display={{xs: 'none', sm: 'block'}}>
                        <Navbar nav={props.nav}/>

                    </Box>

                </AppBar>
            </HideOnScroll>
        </>
    )
}
export default Header