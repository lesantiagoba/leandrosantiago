import React, { useContext, useEffect, useState } from "react";
import EducationCard from "../Component/EducationCard";
import { EducationList } from "../Collection/Data";
import './Education.css';

const Education = () => {
    const [Education, setEducation] = useState(EducationList);
    useEffect(() => {
        setEducation(EducationList);
    },[EducationList])
    return(
       <div className="EducationContainer">
      { Education.map(item => {
        return <EducationCard 
        key={item.id}
        ImgUrl = {item.ImgUrl}
        nombreInstitucion = {item.nombreInstitucion}
        TituloObtenido = {item.TituloObtenido}
        Honores = {item.Honores}
        FromDate = {item.FromDate}
        ToDate = {item.ToDate}
        description = {item.description}
        />
      }
       )
        }
       </div>
    )
}
export default Education;