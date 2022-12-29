import React from "react";
import { Skill } from "../Collection/Data";
import SkilsCard from "../Component/SkillsCard";
import './Skill.css';
const Skills = () => {
    return(
       <div className="SkillsList">
           <SkilsCard 
                Technology = {Skill[0].Technology}
                Percent = {Skill[0].Percent}
                color = "green"
            />
             <SkilsCard 
                Technology = {Skill[0].Technology}
                Percent = {Skill[0].Percent}
                color = "green"
            />
       </div>
    )
}

export default Skills;