import React from 'react';
import 'normalize.css/normalize.css'
import style from './App.sass';
import Header from "./components/header/Header";
import FirstSection from "./components/firstSection/FirstSection";

function App(props) {
  return (
    <div className={style.appWrap}>
        <Header nav = {props.store.header.nav}/>
        <FirstSection/>
    </div>
  );
}

export default App;
