import React from 'react'
import s from './Skill.module.sass'
import SkillImg from "./SkillImage";
import SkillName from "./SkillName";
import SkillDescription from "./SkillDescription";

const Skill = (props) => {
    return(
        <figure>
            <SkillImg/>
            <SkillName/>
            <SkillDescription />
        </figure>

    )
}
export default Skill