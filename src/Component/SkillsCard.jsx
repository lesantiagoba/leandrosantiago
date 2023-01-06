import React, { useEffect, useState } from "react";
import './EducationCard.css';
import './SkillsCard.css';

const SkillsCard = (
   { 
    Technology,
    Percent, 
    color
    }
) => {

    return(
       <div className="SkillsCardContainer">
           <div className="SkillsContainer-Title">
               <h4>{Technology}</h4>
           </div>
           <div className="SkillsContainer-Bar" >
               <div className="Bar-Percent" 
               style={{
                backgroundColor:`${color}`,
                width: `${Percent}%`
               }} >
                  {Percent}%
               </div>
           </div>
       </div>
    )
}


export default SkillsCard;