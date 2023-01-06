import React from "react";
import Navbar from "./NavBar";
import './BoardContainer.css';
import Section from "./Section";
import AboutMe from "../pages/AboutMe"; 
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";
import Experience from "../pages/Experience";

const BoardContainer = () => {
    return(
        <div>
            <Navbar />
            <div className="BoardContainer">
                <div className="BoardContainerInfo" >
                   
                    <div id="AboutMe">
                        <Section name={"About me"} id="AboutMe"/>
                        <AboutMe
                        nombre="Leandro Santiago Batista"
                        descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempore placeat temporibus magnam aperiam inventore sit neque amet. Similique necessitatibus dolores nobis illo nihil sint. Eaque numquam quos atque eveniet!"
                        />
                    </div>
                    <div id="Education">
                        <Section name={"Education"} id="Education" />
                        <Education />
                    </div>
                    
                    <div id="Skills">
                        <Section name={"Skills"} id="Skills"/>
                        <Skills/>
                    </div>
                    <div id="Portfolio">
                        <Section name={"Portfolio"} id="Portfolio"/>
                        <Portfolio/>
                    </div>
                    <div id="Experience">
                        <Section name={"Experience"}/>
                        <Experience/>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}


export default BoardContainer;