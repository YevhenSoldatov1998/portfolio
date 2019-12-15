import React from 'react'
import style from './firstSectionText.module.sass'
const FirstSectionText = (props) => {
    return(
            <h1 className={style.title}>
                <small>Hello</small>
                <strong>I am Yevhen Soldatov</strong>
                <span>A Frond-End Developer</span>
            </h1>
    )
}
export default FirstSectionText