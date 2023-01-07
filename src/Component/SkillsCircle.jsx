import React from "react";
import './SkilsCircle.css';

const SkillsCircle = (
   { Technology,
    Percent, 
    color}
    ) => {

    return(
        <div className="SkillsCircle">
            <div className="SkillsCircle-Container">
                <div className="Container-Technology">
                    <h2>{Technology}</h2>
                </div>
                <div className="Container-Percent">
                    <div style={
                        {
                            width:`${Percent}%`,
                            height:`${Percent}%`,
                            backgroundColor : `${color}`
                        }
                        }className="Percent-Container">
                        <h3>{Percent}%</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsCircle;