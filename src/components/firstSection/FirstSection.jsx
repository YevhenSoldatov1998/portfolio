import React from 'react'
import style from './firstSection.sass'
import bgImage from '../../img/sky.jpg'
import Sun from "./Sun/Sun";
import MountDown from "./MountDown/MountDown";
import MountUp from "./MountUp/MountUp";
import Samurai from "./Samurai/Samurai";
import FirstSectionText from "./FirstSectionText/FirstSectionText";
import Switch from "./Switch/Switch";
import {SunsetReducerCreator} from "../../redux/SunsetReducer";


const FirstSection = (props) => {
    const onMouseMove = e => {
        props.dispatch(SunsetReducerCreator())
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
                <Switch dispatch={props.dispatch}/>
            </main>
        </section>
    )
}
export default FirstSection