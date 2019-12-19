import React from 'react'
import style from './firstSection.sass'
import bgImage from '../../img/sky.jpg'
import Sun from "./Sun/Sun";
import MountDown from "./MountDown/MountDown";
import MountUp from "./MountUp/MountUp";
import Samurai from "./Samurai/Samurai";
import FirstSectionText from "./FirstSectionText/FirstSectionText";
import Switch from "./Switch/Switch";


const FirstSection = (props) => {
    const onMouseMove = e => {
        let currentX = e.nativeEvent.pageX;
        props.mouseMoved(currentX);
    }
    return (
        <section onMouseMove={onMouseMove.bind(this)}
                 className={`firstSection`}>
            <main className={props.switch=='night'?'dark':false}>
                <Sun switch={props.switch}/>
                <Samurai switch={props.switch}/>
                <MountUp switch={props.switch} />
                <MountDown switch={props.switch} />
                <FirstSectionText/>
                <Switch onSwitch={props.onSwitch}/>
            </main>
        </section>
    )
}
export default FirstSection