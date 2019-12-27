import React from 'react'
import s from './footer.module.sass'

const Footer = (props) => {
    return (
        <footer className={`container ${s.footer}`}>
            <div className={s.title}>Yevhen</div>
            <ul className={s.links}>
                <li className={s.link}><a href="#">Facebook</a></li>
                <li className={s.link}><a href="#">Twitter</a></li>
                <li className={s.link}><a href="#">Dribble</a></li>
                <li className={s.link}><a href="#">Linkedin</a></li>
                <li className={s.link}><a href="#">Instagram</a></li>

            </ul>
        </footer>
    )
}
export default Footer