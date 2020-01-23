import React from 'react';
import 'normalize.css/normalize.css'
import './App.sass';
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
            <div className={`appWrap`}>
                <HeaderContainer/>
                <FirstSectionContainer/>
                <SkillsContainer/>
                <div className={`description container`}>
                    <div className={`textDefault`}>
                        <span className="hieroglyph">なぜ</span>
                        <p>I am ready to go through and solve any
                            difficulties encountered on the development
                            path,</p>
                        <p>
                            which would ultimately give you a high-quality
                            and flexible product
                        </p>
                    </div>
                    <div className={`textDefault`}>
                        <span className="hieroglyph">なぜ</span>
                        <p>I am ready to go through and solve any
                            difficulties encountered on the development
                            path,</p>
                        <p>
                            which would ultimately give you a high-quality
                            and flexible product
                        </p>

                    </div>
                </div>
                <WorksContainer/>
                <Telework/>
                <Contacts/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
