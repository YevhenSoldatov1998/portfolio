import React from 'react'
import style from './firstSection.module.sass'
import FirstSectionText from "./FirstSectionText/FirstSectionText";
import FirstSectionImg from "./FirstSectionImg/FirstSectionImg";


const FirstSection = (props) => {
    return (
        <section className={`container ${style.firstSection}`}>
            <FirstSectionText/>
            <FirstSectionImg/>
        </section>
    )
}
export default FirstSection