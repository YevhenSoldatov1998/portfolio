import React from 'react'
import mountDown from '../../../img/mountdown.png'
import s from './MountDown.module.sass'
const MountDown = (props) => {
    const filterClassSwitch  = props.switch === "day"?"brightness(1)":"brightness(0.4)";
    const styles = {
        filter: filterClassSwitch
    }
        return (
            <div style={styles} className={s.mount}>
                <img src={mountDown} alt=""/>
            </div>
        )
    }


export default MountDown