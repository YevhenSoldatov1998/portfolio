import React from 'react'
import style from './header.module.sass'
import {Navbar} from "./Navbar/Navbar";

const Header = (props) => {
    return (
        <header className={`${style.header} container`}>
            <div className={style.logo_wrap}>
                <div className={style.logo}></div>
                <div className={style.name}><span>Y</span>.Soldatov</div>
            </div>
                <Navbar nav = {props.nav}/>
        </header>
    )
}
export default Header