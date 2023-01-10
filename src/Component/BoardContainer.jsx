import React, { useState } from "react";
import Navbar from "./NavBar";
import './BoardContainer.css';
import Section from "./Section";
import AboutMe from "../pages/AboutMe"; 
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";
import Experience from "../pages/Experience";
import Certification from "../pages/Certification";
import ContactForm from "./ContactFom";

const BoardContainer = () => {
    const [ContactCode, setContactCode] = useState();

    return(
        <div className="grid-container">
            <div className="grid-item1--navbar grid-item">
            <Navbar 
                ContactCode={setContactCode}
            />
            </div>
            <div className="grid-item2--container grid-item">
            <div className="BoardContainer">
                <div className="BoardContainerInfo" > 
                    <div id="AboutMe" className="BoradConainer-Section">
                        <Section name={"About me"} />
                        <AboutMe
                        nombre="Leandro Santiago Batista"
                        descripcion="Experienced Information Technology Support Engineer with a demonstrated history of working in the government administration industry. Skilled in WinForms, Responsive Web Design, .NET Framework, JavaScript, and C#. Strong information technology professional graduated from Universidad Catolica Santo Domingo. "
                        />
                    </div>
                    <div id="Education"  className="BoradConainer-Section">
                        <Section name={"Education"}  />
                        <Education />
                    </div>
                    <div id="Certification"  className="BoradConainer-Section">
                        <Section name={"Licence & Certifications"}  />
                        <Certification />
                    </div>
                    
                    <div id="Skills"  className="BoradConainer-Section">
                        <Section name={"Skills"} />
                        <Skills/>
                    </div>
                    <div id="Portfolio"  className="BoradConainer-Section">
                        <Section name={"Portfolio"} />
                        <Portfolio/>
                    </div>
                    <div id="Experience"  className="BoradConainer-Section">
                        <Section name={"Experience"}/>
                        <Experience/>
                    </div>
                    {
                        ContactCode === 0
                        ? <div id="Contact">
                            <ContactForm 
                            save={setContactCode}
                        />
                        </div>
                        : ''
                    }
                    
                </div>
            </div>
            </div>
        </div>
    )
}


export default BoardContainer;