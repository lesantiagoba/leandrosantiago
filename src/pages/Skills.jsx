import React, { useEffect, useState } from "react";
import { Skill } from "../Collection/Data";
import SkillsCard from "../Component/SkillsCard";
import './Skill.css';

const Skills = () => {

    const[ListSkills, setListSkills] = useState(Skill);

    useEffect(() =>{
        console.log(ListSkills);
    },[Skill])

    return(
       <div className="SkillsList">
          {  !ListSkills ?
             <div className="Loading">
                <h2>Loading....</h2>
             </div>
             : ListSkills.map( x => {
                return  <SkillsCard 
                key={x.id}
                Technology={x.Technology}
                Percent={x.Percent}
                color={x.color}
                />
            }
            )}
                
            
        
       </div>
    )
}

export default Skills;