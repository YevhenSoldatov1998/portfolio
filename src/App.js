import React from 'react';
import 'normalize.css/normalize.css'
import style from './App.sass';
import Header from "./components/header/Header";

function App() {
  return (
    <div className={style.appWrap}>
        <Header/>

    </div>
  );
}

export default App;
