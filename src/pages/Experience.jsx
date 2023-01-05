import React from "react";
import EducationCard from "../Component/EducationCard";
import './Experience.css';
const Experience = () => {

    return(
        <div className="experience-Container">
            <EducationCard
               ImgUrl = {"https://www.kcpdynamics.com/wp-content/uploads/Microsoft-Dynamics-AX.png"}
               nombreInstitucion = {"Seguro Nacional de Salud SeNaSa"}
               TituloObtenido = {''}
               Honores = {''}
               FromDate = {'01/01/2001'}
               ToDate = {'01/01/2001'}
               description = {'EducationList[0].description'}
            />
        </div>
    )
}

export default Experience;