import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store} from "./store";
let rerenderEntireTree = () => {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
}

rerenderEntireTree()
store.onSwitchActiveDay()
store.subscribe(rerenderEntireTree)
serviceWorker.unregister();
