import React from 'react'
import s from './footer.module.sass'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
const Footer = () => {
    return (
        <footer className={`container ${s.footer}`}>
            <ul className={s.links}>
                <li className={s.link}><a target="_blank" href="mailto: arr.ess1998@gmail.com" ><MailIcon   /></a></li>
                <li className={s.link}><a target="_blank" href="https://t.me/Web_developer1998"><TelegramIcon  /></a></li>
                <li className={s.link}><a target="_blank" href="#"><WhatsAppIcon  /></a></li>
                <li className={s.link}><a target="_blank" href="https://www.facebook.com/profile.php?id=100025759760724"><FacebookIcon  /></a></li>
                <li className={s.link}><a target="_blank" href="https://twitter.com/soldatov1998"><TwitterIcon  /></a></li>
                <li className={s.link}><a target="_blank" href="https://www.linkedin.com/in/yevhensoldatov1998/"><LinkedInIcon  /></a></li>
                <li className={s.link}><a target="_blank" href="https://www.instagram.com/yevhen_soldatov/"><InstagramIcon  /></a></li>


            </ul>
        </footer>
    )
}
export default Footer