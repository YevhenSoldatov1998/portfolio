import React from 'react'
import s from './Works.module.sass'
import {Title_s} from "../Skills/Skills";
import Work from "./Work/Work";

const Works = (props) => {
    return (
        <section className={`container ${s.wrap}`}>
            <Title_s >Works</Title_s>
            <div className={s.worksFilter}>
                <span>Landing Page</span>
                <span>SPA</span>
                <span>Web-site</span>
            </div>
            <div className={s.works}>
                  <Work/>
                  <Work/>
                  <Work/>
                  <Work/>
                  <Work/>
                  <Work/>

            </div>
        </section>
    )
};
export default Works;