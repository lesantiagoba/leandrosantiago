import React, { useEffect, useState } from "react";
import PortfolioContainer from "../Component/PortfolioContainer";
import './Portfolio.css';
import { Projects } from "../Collection/Data";

const Portfolio = () => {
    const[projectList, setProjectsList] = useState([]);

    useEffect(() => {
        setProjectsList(Projects);
    },[Portfolio])

    return(
        <section className="Portfolio-Container">
            {
                !projectList
                ? 'Loading...'
                :projectList.map(item => {
                    return(
                        < PortfolioContainer 
                        key={item.id}
                        Img={item.Img}
                        Title={item.Title}
                        Description={item.Description}
                        Link ={item.Link}
                        Tecnologies = {item.Tecnologies}
                    />
                       
                        )
                }) 
            }
           
        </section>
    );
}

export default Portfolio;