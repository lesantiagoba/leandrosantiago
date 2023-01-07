import React, { useContext, useEffect, useState } from "react";
import CertificationCard from "../Component/CertificacationCard";
import { Certifications } from "../Collection/Data";
import './Certification.css';


const Certification = () => {
       const [Cert, setCert] = useState(Certifications);
       const [moreContent, setMoreContent] = useState(5);
       
       useEffect(() => {
              let  LenghtCert = Certifications;
              setCert(LenghtCert.slice(0,moreContent));

       },[Certifications])

       useEffect(() => {
              if(moreContent > 5)
              {
                     setCert(Certifications);     
              }
       },[moreContent])

       const ViewMore = () => {
              setMoreContent(Certifications.length);
              console.log(moreContent);
       }

       return(
              
              <div className="CertificactionContainer">
                     {
                     Cert.map(item => {
                            return (
                                   <CertificationCard
                                   key={item.id}
                                   Title = {item.Title}
                                   imgUrl={item.imgUrl}
                                   Company={item.Company}
                                   Date={item.Date}
                                   EndDate={item.EndDate}
                                   CredentialID={item.CredentialID}
                                   Url={item.Url}   
                                   />
                            )
                        })   
                     }
                     <div className="CertificatioContainer-More">
                            {
                                   (moreContent > 5 | Certifications.length < 5)
                                   ? ''
                                   : <h3 onClick={() => ViewMore()}> View More...</h3>
                            }
                     </div>
                     
              </div>

       )
       
    
}
export default Certification;