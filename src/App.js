import React from 'react';
import 'normalize.css/normalize.css'
import style from './App.sass';
import Header from "./components/header/Header";
import FirstSection from "./components/firstSection/FirstSection";
import Skills from "./components/Skills/Skills";

function App(props) {
  return (
    <div className={style.appWrap}>
        <Header nav = {props.store.getState().header.nav}/>
        <FirstSection/>
        <Skills/>
    </div>
  );
}

export default App;
