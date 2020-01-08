const ON_SWITCH = 'ON_SWITCH';
const DRAW_ONE_DAY = 'DRAW_ONE_DAY';
export const ON_SWITCH_CREATOR = () => ({type: ON_SWITCH});
export const DRAW_ONE_DAY_CREATOR = () => ({type: DRAW_ONE_DAY});
let initialState = {
    switch: 'night',
}
const FirstSectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_SWITCH:
            let isDay = state.switch === 'day' ? 'night' : 'day';
            return {
                ...state,
                switch: isDay
            };
        case DRAW_ONE_DAY:
            return {
                ...state,
                switch: 'day'
            }
        default:
            return state

    }
}
export default FirstSectionReducer