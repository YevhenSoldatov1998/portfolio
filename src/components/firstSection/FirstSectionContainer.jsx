import {connect} from 'react-redux'
import FirstSection from "./FirstSection";
import {
    ON_SWITCH_CREATOR,
    DRAW_ONE_DAY_CREATOR
} from "../../redux/FirstSectionReducer";

const mapStateToProps = state => {
    return {
        switch: state.firstSection.switch,
    }
}

export const FirstSectionContainer = connect(mapStateToProps, {
    ON_SWITCH_CREATOR,
    DRAW_ONE_DAY_CREATOR
})(FirstSection);