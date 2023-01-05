import React from "react";
import PortfolioContainer from "../Component/PortfolioContainer";
import './Portfolio.css';


const Portfolio = () => {
    return(
        <section className="Portfolio-Container">
            <PortfolioContainer />
            <PortfolioContainer />
            <PortfolioContainer />
        </section>
    );
}

export default Portfolio;