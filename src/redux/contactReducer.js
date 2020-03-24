import {contactAPI} from "../services/contactAPI";

const SEND_MESSAGE = 'portfolio/contactReducer/SEND_MESSAGE';
const TOGGLE_LOADING = 'portfolio/contactReducer/TOGGLE_LOADING';
const SEND_MESSAGE_ERROR = 'portfolio/contactReducer/SEND_MESSAGE_ERROR';
const DISABLE_MESSAGE_SUCCESS = 'portfolio/contactReducer/DISABLE_MESSAGE_SUCCESS';

const sendMessageSuccess = (name) => ({type: SEND_MESSAGE, name});
const toggleLoading = (loading) => ({type: TOGGLE_LOADING, loading});
const sendMessageError = () => ({type: SEND_MESSAGE_ERROR});
export const disableMessageSuccess = () => ({type: DISABLE_MESSAGE_SUCCESS});
export const sendMessage = (name, phone, message) => async (dispatch) => {
    try {
        dispatch(toggleLoading(true));
        const result = await contactAPI.sendMessage(name, phone, message);
        if (result.data.resultCode === 0) {
            dispatch(sendMessageSuccess(name));
            dispatch(toggleLoading(false));
        }
    } catch (e) {
        dispatch(sendMessageError())
    }
};
const initialState = {
    name: null,
    isSendMessageSuccess: false,
    isSendMessageError: false,
    isLoading: false
}
export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {...state, name: action.name, isSendMessageError: false, isSendMessageSuccess: true};
        case TOGGLE_LOADING:
            return {...state, isLoading: action.loading};
        case SEND_MESSAGE_ERROR:
            return {...state, isSendMessageError: true, isSendMessageSuccess: false};
        case DISABLE_MESSAGE_SUCCESS:
            return {
                ...state, isSendMessageSuccess: false
            }
        default:
            return state;
    }
}