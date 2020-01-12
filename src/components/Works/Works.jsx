import React from 'react'
import s from './Works.module.sass'
import Work from "./Work/Work";
import {Title_s} from "../common/Title";
import WorkCategory from "./WorkCategory/WorkCategory";

const Works = (props) => {

    return (
        <section className={`container ${s.wrap}`}>
            <Title_s>{props.title}</Title_s>

            <div className={s.worksFilter}>
                {props.categories.map(category => {
                    return <WorkCategory key={category.id} sortItems={props.sortItems} category={category}/>
                })}
            </div>
            <div className={s.works}>
                {props.items.map(item =>{
                    return <Work showDetail={props.showDetail} item={item} />
                })}
            </div>
        </section>
    )
};
export default Works;