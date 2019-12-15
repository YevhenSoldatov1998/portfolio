import React from 'react'
import style from "../header.module.sass";
export const Navbar = (props) => {
    return (
        <nav className={style.navbar}>
            {props.nav.map( a => <a key={a.id} > {a.link}</a> )}
        </nav>
    );
}
