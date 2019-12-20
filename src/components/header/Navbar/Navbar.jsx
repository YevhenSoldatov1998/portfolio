import React from 'react'
import {NavLink} from "react-router-dom";
import style from "../header.module.sass";
export const Navbar = (props) => {
    return (
        <nav className={style.navbar}>
            {props.nav.map( a =><NavLink to={a.link.toLowerCase()} key={a.id}> <span>&lt;</span>  {a.link} <span>/&gt;</span>    </NavLink> )}
        </nav>
    );
}
