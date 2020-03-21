import React from 'react'
import './Skills.sass'
import skill1 from '../../img/skill1.jpg'
import skill2 from '../../img/skill2.png'
import LinearScaleIcon from '@material-ui/icons/LinearScale';

const Skills = () => {
    return (
        <section className={`wrap`}>
                <article className={`partDefault partOne`}>
                    <div className={`title titleDefault titleSkill titleWork`}>SKILLS</div>
                    <div className={`partLeft`}>
                    <div className={`partText textDefault stack`}>

                        <p>
                            <span>JavaScript, ES6, TypeScript <LinearScaleIcon/></span>
                            <span>React <LinearScaleIcon/></span>
                            <span>Redux <LinearScaleIcon/></span>
                        </p>
                        <p>
                            <span>HTML5 <LinearScaleIcon/></span>
                            <span>CSS3, CSS frameworks, CSS preprocessors <LinearScaleIcon/></span>
                            <span>CSS Grid, Flexbox, BEM <LinearScaleIcon/></span>
                        </p>

                        <p>
                            <span>NodeJS <LinearScaleIcon/></span>
                            <span>Express <LinearScaleIcon/></span>
                            <span>MongoDB <LinearScaleIcon/></span>
                            <span>GIT, Heroku <LinearScaleIcon/></span>
                        </p>
                    </div>
                </div>
                    <div className={`partImg`}>
                        <img src={skill1} alt=""/>
                    </div>
                </article>

                <article className={`partDefault partTwo`}>
                    <div className={`partImgReverse`}>
                        <img src={skill2} alt=""/>
                    </div>
                    <div>
                        <div style={{opacity: .4}} className={`title titleDefault `}>私自身</div>
                        <div className={`partText textDefault`}>
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