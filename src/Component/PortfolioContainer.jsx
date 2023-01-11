import React, { useEffect, useState } from "react";
import './PortfolioContainer.css';

const PortfolioContainer = (
    {
        Img,
        Title,
        Description,
        Link,
        Tecnologies
    }
) => {

    const [tecnologiesList, setTecnologiesList] = useState();

    useEffect(() => {
        setTecnologiesList(Tecnologies)
    },[Tecnologies])

    return(
        <div className="Container">
            <div className="Container-Cards">
                <div className="Cards-figure">
                    <figure>
                        <img alt={Title} src={Img}/>
                    </figure>
                </div>
                <div className="Card-Title">
                    <h2>{Title}</h2>
                </div>
                <div className="Cards-description">
                    <p>
                        {Description}
                    </p>
                </div>
                {
                     !tecnologiesList 
                     ? <div 
                     style={
                        {
                            backgroundColor:"red"
                        }
                     }
                     className="Card-TecnologiesContainer" >
                        <h2>Loading...</h2>
                     </div>
                        
                     : <div
                        className="Card-TecnologiesContainer">
                            {
                                tecnologiesList.map(item => {
                                    return(
                                        <div key={item.id} className="TecnologiesContainer">
                                                <div  
                                                style={{
                                                    background:`${item.Color}`
                                                    }}
                                                    className="Container-buttons">
                                                    <h3>{item.Name}</h3>
                                                </div>
                                                </div>
                                    )
                                })
                            }
                        </div>
                }
                <div className="cards-link">
                    <a href={Link}>Click for access</a>
                </div>
            </div>
        </div>
    )
}

export default PortfolioContainer;

{/** */}