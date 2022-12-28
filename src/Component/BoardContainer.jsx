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
                <div className="BoardContainerInfo">
                    <Section name={"About me"} />
                    <AboutMe
                    nombre="Leandro Santiago Batista"
                    descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempore placeat temporibus magnam aperiam inventore sit neque amet. Similique necessitatibus dolores nobis illo nihil sint. Eaque numquam quos atque eveniet!"
                    />
                    <Section name={"Education"} />
                    <Education 
                    
                    />
                    <Section name={"Skills"} />
                    <Skills/>
                    <Section name={"Portfolio"} />
                    <Portfolio/>
                    <Section name={"Experience"} />
                    <Experience/>
                </div>
            </div>

        </div>
    )
}


export default BoardContainer;