import React from 'react'
import s from './Works.module.sass'
import Work from "./Work/Work";
import {Title_s} from "../common/Title";
import WorkCategory from "./WorkCategory/WorkCategory";
import DetailWork from "../common/Popup/DetailWork";

const Works = (props) => {

    return (
        <>
            <section className={`container ${s.wrap}`}>
                <Title_s>開発</Title_s>

                <div className={s.worksFilter}>
                    {props.categories.map(category => {
                        return <WorkCategory key={category.id} sortItems={props.sortItems} category={category}/>
                    })}
                </div>
                <div className={s.works}>
                    {props.items.map(item => {
                        return <Work key={item.id} showDetail={props.showDetail} item={item}/>
                    })}
                </div>
            </section>
            {props.isShowDetails && <DetailWork hideDetail={props.hideDetail} item={props.itemsDetail}/>}
        </>
    )
};
export default Works;