import React from 'react'

const ON_SWITCH = 'ON_SWITCH'
export const ON_SWITCH_CREATOR = () => ({type: ON_SWITCH,})

const SwitchReducer = (state , action) => {
    if (action.type === ON_SWITCH) {
        return state = state === 'day'?'night':'day';
    } else {
        return state
    }

}
export default SwitchReducer