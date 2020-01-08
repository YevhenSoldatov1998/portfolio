import {combineReducers, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import FirstSectionReducer from "./FirstSectionReducer";
import headerReducer from "./headerReducer";
const reducers = combineReducers({
    header: headerReducer,
    firstSection: FirstSectionReducer
})
export const store = createStore(reducers, composeWithDevTools())