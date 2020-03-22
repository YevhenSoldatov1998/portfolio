const INIT = 'portfolio/initReducer/INIT';
export const toggleInit = (init) => ({type: INIT, init});

const initialState = {
    init: false
};

export const initReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT:
            return {
                ...state,
                init: action.init
            }
        default:
            return state

    }
}