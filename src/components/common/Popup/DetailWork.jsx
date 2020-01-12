import React from 'react'
import {Popup_s} from "./Popup";
import s from './DetailWork.module.sass'

const DetailWork = (props) => {
    const call_hideDetail = () => {
        props.hideDetail()
    }
    return <Popup_s>
        <div className = {s.overlay}></div>
        <div className={s.popupItem}>
            <span onClick={call_hideDetail}>&times;</span>
            <div className={s.imgWrap}>
                <img src={props.item.img} alt=""/>
            </div>
            <div className={s.imgDescription}>
                <p>{props.item.name}</p>
                <p>{props.item.description}</p>
            </div>
        </div>
    </Popup_s>
}
export default DetailWork