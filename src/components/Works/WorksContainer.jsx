import {connect} from "react-redux";
import Works from "./Works";
import {showDetail, sortItems} from "../../redux/worksReducer";

const mapStateToProps = (state) => {
    let newItems = state.works.items.filter(item =>{
        if(state.works.currentSort === 'All'){
            return item
        }
        if(state.works.currentSort === item.sort){
            return item
        }
    })
    return{
        title:  state.works.title,
        categories: state.works.categories,
        items: newItems,
        itemsDetail: state.works.itemsDetail,
        currentSort: state.works.currentSort,
        isShowDetails: state.works.isShowDetails
    }
};
export const WorksContainer = connect(mapStateToProps, {
    sortItems, showDetail
})(Works);