import React from 'react'
import s from './Skills.module.sass'
import Skill from "./Skill/Skill";
import {Title_s} from "../common/Title";

const Skills = ({skills}) => {
    return (
        <section className={`${s.wrap} container`}>
            <Title_s dark>Skills</Title_s>

            <div className={`${s.skills}`}>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
            </div>

        </section>
    )
}
export default Skills