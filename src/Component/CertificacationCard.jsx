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
                        <a href={Url}>
                            <figure>
                                <img src={imgUrl}/>
                            </figure>
                        </a>
                    </div>
                </div>
                <div className="Licence-Right">
                        <div className="Right-Title">
                            <h2>
                                {Title}
                            </h2>
                        </div>
                        <div className="Right-Company">
                            <h2>
                               ({Company})
                            </h2>
                        </div>
                        <div className="Right-Date">
                            <p>{Date}</p>
                            <p className="Date-Separate"> * </p>
                            <p>
                                {
                                !EndDate ? 'No Expiration Date'
                                : EndDate
                                }
                            </p>
                        </div>
                        <div className="Right-CredentialID">
                            <p>Credential ID </p> 
                            <p className="CredentialID"> {CredentialID}</p>
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