import React, { useEffect, useState } from "react";
import './WorkerExperience.css';

const WorkerExperience = (
    {
        Company,
        CompanyLogo,
        Position
    }
) => {

    const [PositionList, setPositionList] = useState([]);

    useEffect(() => {
        setPositionList(Position);

        return(
            
            console.log(PositionList)
        )
    },[Position])

    return(
        <div className="WorkerExperience">
            <div className="WorkerExperience-Container">
                <div className="WorkerExperience-Company">
                    <div className="WorkerExperience-CompanyLogo">
                        <figure>
                            <img src ={CompanyLogo}/>
                        </figure>
                    </div>
                    <div className="WorkerExperience-Info">
                        <div className="Info-CompanyName">
                            <h2>{Company}</h2>
                        </div>
                        <div className="Info-TotalTime">
                            <h3>7 yrs 8 mos</h3>
                        </div>
                    </div>   
                </div>
                <div className="Worker-Division">
                    <ul  className="Worker-Division--List">
                        {
                            PositionList.reverse().map(item => {
                                return(
                                    <li 
                                    key={item.id}
                                    className="List-Info">
                                        <div className="InfoContainer">
                                            <div className="InfoContainer-Title">
                                                <h2>{item.Position}</h2>
                                                <h3>{item.Type}</h3>
                                            </div>
                                            <div className="InfoContainer-Dates">
                                                <div className="InfoContainer-DateFrom">
                                                    <h3>{item.DateFrom}</h3>
                                                </div>
                                                <div className="InfoContainer-Separate">
                                                    <h3> - </h3>
                                                </div>
                                                <div className="InfoContainer-DateTo">
                                                    {!item.DateTo 
                                                    ? <h3>Present</h3>
                                                    : <h3>{item.DateTo}</h3>
                                                    }  
                                                </div>
                                            </div>
                                            <div className="InfoContailer-Location">
                                                <h3>{item.Location}</h3>
                                            </div>
                                            <div className="InfoContailer-Activities">
                                                <h3>{item.Description}</h3>
                                            </div>
                                            <div className="InfoContainer-Skills">
                                                {
                                                   item.Tecnologies.map(value => {
                                                    return(
                                                        <div 
                                                        key={value.id}
                                                        className="skills-button"
                                                        style={{
                                                            backgroundColor: `${value.color}`
                                                        }}
                                                        >
                                                            <div className="button-Text">
                                                                <h2>
                                                                    {value.Name}
                                                                </h2>
                                                            </div>
                                                        </div>    
                                                    )
                                                   })
                                                }   
                                            </div>
                                        <div className="LicenceContainer-Division">
                                            <hr />
                                        </div>
                                        </div>
                                    </li>
                                )
                            })
                        }      
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default WorkerExperience;