import React from "react";
import Profile from "../Common/Profile.jpg";
import twitter from "../Common/img/Social/twitter-svgrepo-com.svg";
import linkedin from "../Common/img/Social/linkedin-1-svgrepo-com.svg";
import github from "../Common/img/Social/github-svgrepo-com.svg";
import './AboutMe.css';

const AboutMe = ({
    nombre,
    descripcion
}) => {
    return(
        <div className="AboutMeContainer">
            <div className="AboutMeContainer-Left">
                <div className="Left_Image">
                    <img alt="" src ={Profile}/>
                </div>
                <div className="Left_Name">
                    <h2>{nombre}</h2>
                </div>
                <div className="AboutMeContainer-Social">
                    <div className="Social-Container">
                        <a href="https://www.github.com">
                            <figure  className="Social-Network">
                                <img alt="" src={github} />
                            </figure>
                        </a>
                    <a href="https://www.twitter.com">
                            <figure className="Social-Network">
                                <img alt="" src={twitter} />
                            </figure>
                    </a>
                    <a href="https://www.linkedin.com">
                            <figure className="Social-Network">
                                <img alt="" src={linkedin} />
                            </figure>
                    </a>
                        </div>
                </div>
            </div>
            <div className="AboutMeContainer-Right">
                <div className="Right">
                    <p>{descripcion}</p>

                </div>
            </div>
        </div>
     
    )
}

export default AboutMe;