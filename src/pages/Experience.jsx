import React, { useEffect, useState } from "react";
import './Experience.css';
import WorkerExperience from "../Component/WorkerExperience";
import { ExperienceWork } from "../Collection/Data";

const Experience = () => {

    const[ExperienceList, setExperienceList] = useState(ExperienceWork)

    useEffect(() => {
        console.log(ExperienceWork)
        setExperienceList(ExperienceWork);
    }, [ExperienceWork])

    return(
        <div className="experience-Container">
            {
                ExperienceList.map(item => {
                    return(
                        <WorkerExperience 
                            key={item.id}
                            Company={item.company}
                            CompanyLogo={item.companyLogo}
                            Position={item.Position}
                        />
                    )
                })
            }
           
        </div>
    )
}

export default Experience;