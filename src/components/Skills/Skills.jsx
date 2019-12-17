import React from 'react'
import s from './Skills.module.sass'
import Skill from "./Skill/Skill";

const Skills = (props) => {
    return (
        <section className={`${s.skills} container`}>
           <Skill/>
           <Skill/>
           <Skill/>
        </section>
    )
}
export default Skills