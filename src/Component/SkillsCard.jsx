import React from "react";
import './EducationCard.css';

const SkilsCard = ({
    Technology,
    Percent, 
    color
}) => {

    return(
       <div className="SkillsCardContainer">
            <div className="SkillsCardContainer-Technology">
               <h2 style={{color: color}}>
                    {Technology}
              </h2> 
            </div>
            <div className="SkillCardContainer-Percent">
               <h2 style={{color: color}}>
                    {Percent}%
               </h2> 
            </div>
       </div>
    )
}


export default SkilsCard;