import React from 'react'
import style from './firstSection.module.sass'
import bgImage from './img/sky.jpg'
import ReactArt from "./Moon/Moon";
import MountDown from "./MountDown/MountDown";
import MountUp from "./MountUp/MountUp";

const sectionStyle ={
    backgroundImage: `url(${bgImage})`,
    color: `red`,
    backgroundSize: 'cover'
}
const FirstSection = (props) => {
    return (
        <section style={sectionStyle} className={`container ${style.firstSection}`}>
            <ReactArt/>
            <MountUp/>
            <MountDown/>
        </section>
    )
}
export default FirstSection