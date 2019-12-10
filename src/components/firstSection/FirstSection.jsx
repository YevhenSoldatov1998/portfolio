import React from 'react'
import style from './firstSection.module.sass'
import FirstSectionText from "./firstSectionText/FirstSectionText";
import FirstSectionImg from "./firstSectionImg/FirstSectionImg";
const FirstSection = (props) => {
    return(
        <section className={`container ${style.firstSection}`}>
            <FirstSectionText/>
            <FirstSectionImg />
        </section>
    )
}
export default FirstSection