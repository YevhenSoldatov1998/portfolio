import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import FirstSectionReducer from "./FirstSectionReducer";
import headerReducer from "./headerReducer";
import worksReducer from "./worksReducer";
import {initReducer} from "./initReducer";
import { reducer as formReducer } from 'redux-form'
import thunk from "redux-thunk";
import {contactReducer} from "./contactReducer";

const reducers = combineReducers({
    header: headerReducer,
    firstSection: FirstSectionReducer,
    works: worksReducer,
    init: initReducer,
    contact: contactReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));