import React from 'react';
import 'normalize.css/normalize.css'
import style from './App.sass';
import FirstSection from "./components/firstSection/FirstSection";
import Skills from "./components/Skills/Skills";

const App = (props) => {
  return (
    <div className={style.appWrap}>
        <FirstSection position = {props.store.getState().sections.position}
                      switch = {props.store.getState().sections.switch}
                      onSwitch = {props.store.onSwitch.bind(props.store)}
                      mouseMoved = {props.store.mouseMoved.bind(props.store) }
                      nav = {props.store.getState().header.nav}/>
        <Skills/>
    </div>
  );
}

export default App;
