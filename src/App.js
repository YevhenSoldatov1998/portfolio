import React from 'react';
import 'normalize.css/normalize.css'
import style from './App.sass';
import FirstSection from "./components/firstSection/FirstSection";
import {SkillsContainer} from "./components/Skills/SkillsContainer";
import {BrowserRouter} from "react-router-dom";
import {WorksContainer} from "./components/Works/WorksContainer";
import Contacts from "./components/Contacts/Contacts";
import Telework from "./components/telework/Telework";
import Footer from "./components/footer/Footer";
import {HeaderContainer} from "./components/header/HeaderContainer";
import {FirstSectionContainer} from "./components/firstSection/FirstSectionContainer";

const App = (props) => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className={style.appWrap}>
                {/*<HeaderContainer />*/}
                {/*<FirstSectionContainer/>*/}
                <SkillsContainer/>
                <WorksContainer/>
                <Telework />
                <Contacts />
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
