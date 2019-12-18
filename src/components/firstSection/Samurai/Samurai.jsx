import React from 'react'
import samurai from '../../../img/samurai.png'
import s from './Samurai.module.sass'
const Samurai = (props) => {
    const switchClassActive = props.switch == "day"?"grayscale(0)":"grayscale(.9)";
    const filter = {
        filter: switchClassActive
    }
    return(
        <div style={filter} className={s.samurai}>
            <img src={samurai} alt=""/>
        </div>
    )
}
export default Samurai