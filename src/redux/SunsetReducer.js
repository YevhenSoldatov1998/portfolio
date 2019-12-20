import React from 'react'
const SUNSET_MOVE = 'SUNSET_MOVE';
export const SunsetReducerCreator = () => ({type: SUNSET_MOVE });
const SunsetReducer = (action) => {
    if(action.type === SUNSET_MOVE){
        return true
    }
}
export default SunsetReducer