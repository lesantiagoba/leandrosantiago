import React from "react";
import './CertificationCard.css';

const CertificationCard = ({
    Title,
    imgUrl,
    Company,
    Date,
    EndDate,
    CredentialID,
    Url
}) => {
    return(
        <div className="LicenceContainer">
            <div className="Container-LeftRight">
                <div className="Licence-Left">
                    <div className="Left-img">
                        <a href="#">
                            <figure>
                                <img src="https://media.licdn.com/dms/image/C4E0BAQEGpwGPMezwTw/company-logo_200_200/0/1519884816884?e=1681344000&v=beta&t=j1KW1xVwAV5f4RZTEqjJ7EBtCHuZrkl-wXbhfJ2MY5o" />
                            </figure>
                        </a>
                    </div>
                </div>
                <div className="Licence-Right">
                        <div className="Right-Title">
                            <h2>
                                ITIL Foundation Certificate in It Service Management
                            </h2>
                        </div>
                        <div className="Right-Company">
                            <h2>
                                PeopleCert
                            </h2>
                        </div>
                        <div className="Right-Date">
                            <p>Issued March 2021 </p>
                            <p className="Date-Separate"> * </p>
                            <p>No Expiration Date</p>
                        </div>
                        <div className="Right-CredentialID">
                            <p>Credential ID </p> 
                            <p className="CredentialID"> GR671249767LS</p>
                        </div>
                    </div>
            </div>
            <div className="LicenceContainer-Division">
                <hr />
            </div>
        </div>
    )
}

export default CertificationCard;