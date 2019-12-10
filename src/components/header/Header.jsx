import React from 'react'
import style from './header.module.sass'
const Header = () => {
    return (
        <header className={`${style.header} container`}>
            <div className={style.logo}><span></span>LOGO</div>
            <nav className={style.navbar}>
                <a>Skill</a>
                <a>Work</a>
                <a>Contact</a>
            </nav>
        </header>
    )
}
export default Header