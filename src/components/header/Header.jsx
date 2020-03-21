import React from 'react'
import style from './header.module.sass'
import {Navbar} from "./Navbar/Navbar";
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import * as PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";

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
            height: 80,
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
            background: 'rgba(51,51,51,0.8)',
            zIndex: 30
        }
    })
const Header = (props) => {

    const classes = useStyles();
    return (
        <>
            <CssBaseline/>
            <HideOnScroll {...props}>
                <AppBar className={classes.root}>
                    <div className={style.logo_wrap}>
                        <div className={style.logo}></div>
                        <div className={style.name}><span> Y</span>.Soldatov </div>
                    </div>
                    <Navbar nav={props.nav}/>
                </AppBar>
            </HideOnScroll>
        </>
    )
}
export default Header