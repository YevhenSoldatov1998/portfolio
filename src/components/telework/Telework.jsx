import React from 'react'
import s from './telework.module.sass'
import {Title_s} from "../common/Title";
const Telework = (props) =>{
    return(
        <section className={`container ${s.telework}`}>
            <Title_s dark>Hire me to work</Title_s>
            <button>Нire me</button>
        </section>
    )
}
export default Telework;