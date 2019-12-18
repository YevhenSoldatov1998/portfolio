import React from 'react'
import mountUp from '../img/mountapp.png'
import s from './MountUp.module.sass'
const MountUp = () => {
    return (
        <div className={s.mount}>
            <img src={mountUp} alt=""/>
        </div>
    )
}
export default MountUp