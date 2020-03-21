import React from "react";

const WorkCategory = (props) => {
    const call_sortItems = (item) =>{
        props.sortItems(item.sort);
        props.setActive(item.name);
    };
    return (
        <span className={props.active === props.category.name ? 'active': '' }
              onClick={()=>call_sortItems(props.category)}
        >
            {props.category.name}
        </span>
    )
}
export default WorkCategory