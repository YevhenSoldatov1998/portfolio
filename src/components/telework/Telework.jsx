import React from 'react'
import {Title_s} from "../Skills/Skills";
import s from './telework.module.sass'
const Telework = (props) =>{
    return(
        <section className={`container ${s.telework}`}>
            <Title_s dark>Hire me to work</Title_s>
            <button>Нire me</button>
        </section>
    )
}
export default Telework;