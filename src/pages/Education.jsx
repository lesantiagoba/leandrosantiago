import React, { useContext, useEffect, useState } from "react";
import EducationCard from "../Component/EducationCard";
import { Data } from "../Collection/Data";

const Education = () => {



    return(
       <div className="EducationContainer">
        {
            Data.map(x => {
              if(x.clasificion == 1)
              {
                {console.log(Data)}
                <EducationCard 
                  ImgUrl = {x.Honores}
                  nombreInstitucion = {x.nombreInstitucion}
                  TituloObtenido = {x.TituloObtenido}
                  Honores = {x.Honores}
                  FromDate = {x.FromDate}
                  ToDate = {x.ToDate}
                  description = {x.description}
              />
              }
            })
        } 
       </div>
    )
}
export default Education;