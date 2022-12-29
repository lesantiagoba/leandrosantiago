import React, { useContext, useEffect, useState } from "react";
import EducationCard from "../Component/EducationCard";
import { EducationList } from "../Collection/Data";
import './Education.css';

const Education = () => {

    return(
       <div className="EducationContainer">
       
          <EducationCard 
            ImgUrl = {EducationList[0].ImgUrl}
            nombreInstitucion = {EducationList[0].nombreInstitucion}
            TituloObtenido = {EducationList[0].TituloObtenido}
            Honores = {EducationList[0].Honores}
            FromDate = {EducationList[0].FromDate}
            ToDate = {EducationList[0].ToDate}
            description = {EducationList[0].description}
        />
          <EducationCard 
            ImgUrl = {EducationList[0].ImgUrl}
            nombreInstitucion = {EducationList[0].nombreInstitucion}
            TituloObtenido = {EducationList[0].TituloObtenido}
            Honores = {EducationList[0].Honores}
            FromDate = {EducationList[0].FromDate}
            ToDate = {EducationList[0].ToDate}
            description = {EducationList[0].description}
        />

        <EducationCard 
            ImgUrl = {EducationList[0].ImgUrl}
            nombreInstitucion = {EducationList[0].nombreInstitucion}
            TituloObtenido = {EducationList[0].TituloObtenido}
            Honores = {EducationList[0].Honores}
            FromDate = {EducationList[0].FromDate}
            ToDate = {EducationList[0].ToDate}
            description = {EducationList[0].description}
        />
        
       </div>
    )
}
export default Education;