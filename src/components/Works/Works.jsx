import React from 'react'
import './Works.sass'
import Work from "./Work/Work";
import WorkCategory from "./WorkCategory/WorkCategory";
import DetailWork from "../common/Popup/DetailWork";

const Works = (props) => {

    return (
        <>
            <section>
                <div className="container">
                    <h2 className={`title titleWork titleDefault`}>
                        <span>WORK</span>
                        <div className={`worksFilter`}>
                            {props.categories.map(category => {
                                return <WorkCategory key={category.id} sortItems={props.sortItems} category={category}/>
                            })}
                        </div>
                    </h2>


                    <div className={`works`}>
                        {props.items.map(item => {
                            return <Work key={item.id} showDetail={props.showDetail} item={item}/>
                        })}
                    </div>
                </div>
            </section>
            {props.isShowDetails && <DetailWork hideDetail={props.hideDetail} item={props.itemsDetail}/>}
        </>
    )
};
export default Works;