import React from 'react';
import 'normalize.css/normalize.css'
import style from './App.sass';
import FirstSection from "./components/firstSection/FirstSection";
import Skills from "./components/Skills/Skills";
import Header from "./components/header/Header";
import {BrowserRouter} from "react-router-dom";
import Works from "./components/Works/Works";
import Contacts from "./components/Contacts/Contacts";

const App = (props) => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className={style.appWrap}>
                <Header nav={props.store.getState().header.nav}/>
                <FirstSection position={props.store.getState().sections.position}
                              switch={props.store.getState().sections.switch}
                              dispatch={props.store.dispatch.bind(props.store)}
                />
                <Skills/>
                <Works/>
                <Contacts />
            </div>
        </BrowserRouter>
    );
}

export default App;
