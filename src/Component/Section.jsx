import React from "react";
import './Section.css';

const Section = ({name}) => {
    return(
        <div className="Sectionontainer">
            <div className="c">
                <h2 id="#">
                    {name}
                </h2>
            </div>
            <div className="">
                <hr />
            </div>
            
        </div>
    )
}

export default Section;