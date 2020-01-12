import React from "react";

const WorkCategory = (props) => {
    const call_sortItems = (sort) =>{
        props.sortItems(sort);
    };

    return <span onClick={()=>call_sortItems(props.category.sort)}>{props.category.name}</span>
}
export default WorkCategory