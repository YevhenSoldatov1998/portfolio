import React from 'react'
import s from "./Work.module.sass";

const Work = (props) => {
    debugger
    const call_showDetail = (item) =>{
        props.showDetail(item)
    }
    return(
        <article className={s.work}>
            <img onClick={()=> call_showDetail(props.item)} src={props.item.img} alt=""/>
            <div className={s.title}>{props.item.name}</div>
            <div className={s.description}>{props.item.description}</div>
        </article>
    )
}
export default Work