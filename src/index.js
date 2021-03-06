import React from 'react';
import ReactDOM from 'react-dom';
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";
import AppContainer from "./redux/AppContainer";

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>, document.getElementById('root'));



