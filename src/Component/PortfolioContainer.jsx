import React from "react";
import './PortfolioContainer.css';

const PortfolioContainer = () => {
    return(
        <div className="Container">
            <div className="Container-Cards">
                <div className="Cards-figure">
                    <figure>
                        <img src="https://www.kcpdynamics.com/wp-content/uploads/Microsoft-Dynamics-AX.png"/>
                    </figure>
                </div>
                <div className="Cards-description">
                    <p>
                         quibusdam pariatur excepturi, necessitatibus similique officia est vel quam facere enim ratione.
                    </p>
                </div>
                <div className="cards-link">
                    <a href="#">Access Link</a>
                </div>
            </div>
        </div>
    )
}

export default PortfolioContainer;