import {combineReducers, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import FirstSectionReducer from "./FirstSectionReducer";
import headerReducer from "./headerReducer";
import worksReducer from "./worksReducer";
import {initReducer} from "./initReducer";

const reducers = combineReducers({
    header: headerReducer,
    firstSection: FirstSectionReducer,
    works: worksReducer,
    init: initReducer
})
export const store = createStore(reducers, composeWithDevTools())