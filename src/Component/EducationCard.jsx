import React, { useEffect } from "react";
import "./EducationCard.css";

const EducationCard = (
    {
        ImgUrl,
        nombreInstitucion,
        TituloObtenido,
        Honores,
        FromDate,
        ToDate,
        description
    }
    ) => {
     
    return(
        
        <div className="EducationContainer">
            <div className="EducationContainer-Left">
                <div className="Left-Img">
                    <img src={ImgUrl} />
                </div>
                <div className="Left-NombreInstitucion">
                    <h2>{nombreInstitucion}</h2>
                </div>
            </div>
            <div className="EducationContainer-Right">
                <div className="Right-Titulo">
                    <h2>{TituloObtenido}</h2>
                </div>
                {!Honores ? " "
                :
                    <div className="Right-Honor"> 
                        <h4>{Honores}</h4>
                    </div>
                }
                <div className="Right-Dates">
                    <div className="DateFrom">
                        <h4>From Date:{FromDate}</h4>
                    </div>
                    <div className="DateTo">
                        <h4>To Date:{ToDate}</h4>
                    </div>
                </div>
                <div className="Right-Description">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
            
    )
}

export default EducationCard;