import React from 'react'
import s from './Skills.module.sass'
import skill1 from '../../img/skill1.jpg'
import skill2 from '../../img/skill2.png'
const Skills = ({skills}) => {
    return (
        <section className={`${s.wrap}`}>
                <article className={`${s.partDefault} ${s.partOne}`}>
                <div className={`${s.partLeft}`}>
                    <div className={`${s.title} titleDefault `}>知識</div>
                    <div className={`${s.partText} textDefault`}>
                        <p>HTML5, CSS3,
                            CSS frameworks, CSS preprocessors,
                            CSS Grid, Flexbox, BEM</p>
                        <p>JS, ES6, React, Redux, TypeScript, JS Tools
                            (Yarn, npm, Webpack, Babel)</p>
                        <p>JS, ES6, React, Redux, TypeScript, JS Tools
                            (Yarn, npm, Webpack, Babel)</p>
                    </div>
                </div>
                    <div className={s.partImg}>
                        <img src={skill1} alt=""/>
                    </div>
                </article>

                <article className={`${s.partDefault} ${s.partTwo}`}>

                    <div className={s.partImgReverse}>
                        <img src={skill2} alt=""/>
                    </div>
                    <div>
                        <div className={`${s.title}  titleDefault `}>私自身</div>
                        <div className={`${s.partText} textDefault`}>
                            <p>I am ready to go through and solve any
                                difficulties encountered on the development
                                path,</p>
                            <p>which would ultimately give you a high-quality
                                and flexible product</p>

                        </div>
                    </div>
                </article>
        </section>

    )
}
export default Skills