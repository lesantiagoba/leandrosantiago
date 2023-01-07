import React from "react";
import './WorkerExperience.css';

const WorkerExperience = (
    {
        Company,
        CompanyLogo,
        Position
    }
) => {
    return(
        <div className="WorkerExperience">
            <div className="WorkerExperience-Container">
                <div className="WorkerExperience-Company">
                    <div className="WorkerExperience-CompanyLogo">
                        <figure>
                            <img src ="https://th.bing.com/th/id/R.a91929defa6839ea96968ea5a8220d23?rik=LnX8cTBxGTq%2bYg&pid=ImgRaw&r=0" />
                        </figure>
                    </div>
                    <div className="WorkerExperience-Info">
                        <div className="Info-CompanyName">
                            <h2>Seguro Nacional de Salud SeNaSa</h2>
                        </div>
                        <div className="Info-TotalTime">
                            <h3>7 yrs 8 mos</h3>
                        </div>
                    </div>   
                </div>
                <div className="Worker-Division">
                    <ul  className="Worker-Division--List">
                        <li className="List-Info">
                            <div className="InfoContainer">
                                <div className="InfoContainer-Title">
                                    <h2>Software Developer</h2>
                                    <h3>Full-Time</h3>
                                </div>
                                <div className="InfoContainer-Dates">
                                    <div className="InfoContainer-DateFrom">
                                        <h3>May 2021</h3>
                                    </div>
                                    <div className="InfoContainer-Separate">
                                        <h3>-</h3>
                                    </div>
                                    <div className="InfoContainer-DateTo">
                                        <h3>Present</h3>
                                    </div>
                                </div>
                                <div className="InfoContailer-Location">
                                    <h3>Santo Domingo</h3>
                                </div>
                                <div className="InfoContailer-Activities">
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nisi nulla explicabo corrupti voluptatem atque recusandae eaque eos assumenda quibusdam, numquam aperiam ab fugit delectus, illum maiores veritatis obcaecati. Aliquid!</h3>
                                </div>
                                <div className="InfoContainer-Skills">
                                    <div className="skills-button">
                                        <div className="button-Text">
                                            <h2>
                                                HTML
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default WorkerExperience;