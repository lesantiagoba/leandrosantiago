import React from "react";
import Navbar from "./NavBar";
import './BoardContainer.css';
import Section from "./Section";
import AboutMe from "../pages/AboutMe"; 
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";
import Experience from "../pages/Experience";
import CertificationCard from "./CertificacationCard";

const BoardContainer = () => {

    return(
        <div>
            <Navbar />
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
                    <div id="Lliecence"  className="BoradConainer-Section">
                        <Section name={"Licence & Certifications"}  />
                        <CertificationCard />
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
                    
                </div>
            </div>

        </div>
    )
}


export default BoardContainer;