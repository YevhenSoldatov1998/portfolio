import React from 'react'
import mountUp from '../../../img/mountapp.png'
import s from './MountUp.module.sass'

const MountUp = (props) => {
    const filterClassSwitch = props.switch == "day" ? "brightness(1)" : "brightness(0.4)"
    const styled = {
        filter: filterClassSwitch
    }
    return (
        <div style={styled} className={s.mount}>
            <img src={mountUp} alt=""/>
        </div>
    )
}
export default MountUp