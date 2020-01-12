import {connect} from "react-redux";
import Skills from "./Skills";
const mapStateToProps = (state) => {
    return{
        skills: []
    }
}
export const SkillsContainer = connect(mapStateToProps, {})(Skills);