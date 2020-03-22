import React, {useEffect} from 'react'
import App from "../App";
import {connect} from "react-redux";
import {toggleInit} from "./initReducer";
import Progress from "../components/common/Progress";

const AppContainer = ({init, toggleInit}) => {
    useEffect(() => {
        setTimeout(()=> {
            toggleInit(true)
        } , 1500)
        }, []);
    if(!init){
        return <Progress />
    }
    return (
        <App />
    )
}
let mapStateToProps = (state) => ({
    init: state.init.init
})
export default connect(mapStateToProps , {toggleInit} )(AppContainer)