import React from 'react'
import s from './Skills.module.sass'
import Skill from "./Skill/Skill";
import styled , {css} from "styled-components";
import img from '../../img/React-graphic.png'
export const Title_s = styled.h1`
    font-size: 50px;
    margin: 0;
    position: relative;
    text-align: right;
    transition: color 10s ease;
    color: #4c044e;
    opacity: .4;
    overflow: hidden;
   
     ${props => props.dark && css`
        color: #fff;
     `};
    
`
const Skills = (props) => {
    return (
        <section className={`${s.wrap} container`}>
            <Title_s  dark>Skills</Title_s>
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