import React from 'react'
import s from "./Work.module.sass";
const Work = (props) => {
    return(
        <article className={s.work}>
            <img src="https://tigermonkey.net/wp-content/uploads/2016/07/Web-design-300x300.png" alt=""/>
            <div className={s.title}>React Js</div>
            <div className={s.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, quis.</div>
        </article>
    )
}
export default Work