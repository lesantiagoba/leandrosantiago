import React from "react";
import Profile from "../Common/Profile.jpg";
import './AboutMe.css';

const AboutMe = ({
    nombre,
    descripcion
}) => {
    return(
        <div className="AboutMeContainer">
            <div className="AboutMeContainer-Left">
                <div className="Left_Image">
                    <img src ={Profile}/>
                </div>
                <div className="Left_Name">
                    <h2>{nombre}</h2>
                </div>
            </div>
            <div className="AboutMeContainer-Right">
                <div className="Right">
                    <p>{descripcion}</p>
                </div>
            </div>
        </div>
     
    )
}

export default AboutMe;