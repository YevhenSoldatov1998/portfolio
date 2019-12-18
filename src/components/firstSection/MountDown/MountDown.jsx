import React from 'react'
import mountDown from '../img/mountdown.png'
import s from './MountDown.module.sass'
const MountDown = () =>{
    return(
        <div className={s.mount}>
            <img src={mountDown} alt=""/>
        </div>
    )
}
export default MountDown