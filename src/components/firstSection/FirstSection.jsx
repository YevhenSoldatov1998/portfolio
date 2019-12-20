import React from 'react'
import './firstSection.sass'
import Sun from "./Sun/Sun";
import MountDown from "./MountDown/MountDown";
import MountUp from "./MountUp/MountUp";
import Samurai from "./Samurai/Samurai";
import FirstSectionText from "./FirstSectionText/FirstSectionText";
import Switch from "./Switch/Switch";
import {SUNSET_MOVE_CREATOR} from "../../redux/FirstSectionReducer";


const FirstSection = (props) => {
    const onMouseMove = () =>  props.dispatch(SUNSET_MOVE_CREATOR())
    return (
        <section onMouseMove={onMouseMove.bind(this)}
                 className={`firstSection`}>
            <main className={props.switch==='night'?'dark':false}>
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