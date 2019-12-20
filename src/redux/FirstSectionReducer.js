const ON_SWITCH = 'ON_SWITCH';
const SUNSET_MOVE = 'SUNSET_MOVE';
export const ON_SWITCH_CREATOR = () => ({type: ON_SWITCH,})
export const SUNSET_MOVE_CREATOR = () => ({type: SUNSET_MOVE });

const FirstSectionReducer = (state , action) => {
    switch (action.type) {
        case ON_SWITCH:
            return state = state === 'day' ? 'night' : 'day';
            break;
        case SUNSET_MOVE:
            return state;
            break;
        default:
            return state

    }
}
export default FirstSectionReducer