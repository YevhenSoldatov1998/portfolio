import React from 'react'
import style from './firstSection.module.sass'
import FirstSectionText from "./FirstSectionText/FirstSectionText";
import ReactArt from "./React/React";


const FirstSection = (props) => {
    return (
        <section className={`container ${style.firstSection}`}>
            {/*<FirstSectionText/>*/}
            <ReactArt/>
        </section>
    )
}
export default FirstSection