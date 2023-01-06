import React from "react";
import './InfoCard.css';

const InfoCard = (Img, Title, DateFrom, DateTo, Info) => {
    return(
        <div className="CardContainer">
            <div className="CardContainer-Logo">
                <figure>
                    <img src="https://yt3.ggpht.com/a/AATXAJy559k6O2nQra1TFTCB9ZWSK_L3o1cTI4IXbw=s900-c-k-c0xffffffff-no-rj-mo"/ >
                </figure>
            </div>
            <div className="CardContainer-info">
                <div className="CardContainer-Title">
                    <h2>
                        Seguro Nacional de Salud SeNaSa
                    </h2>
                    <h4>Desarrollador</h4>
                </div>
                <div className="CardContainer-Date">
                    <div className="Date_From">
                        <h2>01/01/2022</h2>
                    </div>
                    <div className="Date_To">
                        <h2>01/01/2022</h2>
                    </div>
                </div>
                <div className="CardContainer-Info">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, explicabo velit? Quam fugiat exercitationem iusto hic dolorem recusandae dolorum ducimus id, numquam minus inventore, distinctio laborum fugit sapiente molestiae asperiores!</p>
                </div>
            </div>
           
        </div>
    )

}

export default InfoCard;