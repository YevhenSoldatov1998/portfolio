import React from 'react'
import './firstSection.sass'
import Sun from "./Sun/Sun";
import MountDown from "./MountDown/MountDown";
import MountUp from "./MountUp/MountUp";
import Samurai from "./Samurai/Samurai";
import FirstSectionText from "./FirstSectionText/FirstSectionText";
import Switch from "./Switch/Switch";



class FirstSection extends React.Component {
    componentDidMount() {
        setTimeout(() => this.props.DRAW_ONE_DAY_CREATOR(), 1000)
    }

    render() {
        return (
            <section className={`firstSection`}>
                <main className={this.props.switch === 'night' ? 'dark' : 'night'}>
                    <Sun switch={this.props.switch}/>
                    <Samurai switch={this.props.switch}/>
                    <MountUp switch={this.props.switch}/>
                    <MountDown switch={this.props.switch}/>
                    <FirstSectionText/>
                    <Switch ON_SWITCH_CREATOR={this.props.ON_SWITCH_CREATOR}/>
                </main>
            </section>
        )
    }

}

export default FirstSection