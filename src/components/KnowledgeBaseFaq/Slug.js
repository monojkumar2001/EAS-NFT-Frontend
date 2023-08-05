import React from "react";
import {FaqData, FaqData2} from "../../FaqData/FaqData";
import { Link, useParams } from "react-router-dom";


const FaqQuestionDetails = ({data1}) => {
  const id = useParams();
  console.log('id',id)

  const singleData = data1.filter(res => res.id == id.id);
  console.log(singleData);

  return (
    <>
      <div className="faq-question-details-wrapper">
        {/* <h1>{FaqData.title}</h1>
        <p>{FaqData.dis}</p> */}
        
            <div>
              <h1>{singleData[0].faq}</h1>
              <p>{singleData[0].dis}</p>
            </div>
         
      </div>
    </>
  );
};

// const data = [
//   {
//     id: 1,
//     fileIcon: "/images/knowledge-base/faq-file-icon.svg",
//     faq: "joney",
//     slug: "What-are-EAS-Address-NFTs?",
//     dis:`Address NFTs comprise all NFTs from the following categories: Residential, Commercial, Industrial, Hospitality, Government, Police & Fire, Travel Hubs, Stadiums & Venues, Historic Landmarks, Museums & Libraries, Parks & Recreation, and Bridges, Tunnels & Dams. 

//     EAS expects to mint millions of Address NFTs that represent every physical address in the world on a 1-to-1 ratio, meaning that any address (in Google Maps for instance) will only have one unique EAS NFT associated with it. 
    
//     Address NFTs will generate revenue from their commercial application in Web3 and the metaverse. Any aggregated royalties are payable monthly.`
// },
//   {
//     id: 2,
//     fileIcon: "/images/knowledge-base/faq-file-icon.svg",
//     faq: "What are EAS Charity NFTs?",
//     dis:`Address NFTs comprise all NFTs from the following categories: Residential, Commercial, Industrial, Hospitality, Government, Police & Fire, Travel Hubs, Stadiums & Venues, Historic Landmarks, Museums & Libraries, Parks & Recreation, and Bridges, Tunnels & Dams. 

//     EAS expects to mint millions of Address NFTs that represent every physical address in the world on a 1-to-1 ratio, meaning that any address (in Google Maps for instance) will only have one unique EAS NFT associated with it. 
    
//     Address NFTs will generate revenue from their commercial application in Web3 and the metaverse. Any aggregated royalties are payable monthly.`
//   },
//   {
//     id: 3,
//     fileIcon: "/images/knowledge-base/faq-file-icon.svg",
//     faq: "What are EAS Neighborhood NFTs?",
//   },
//   {
//     id: 4,
//     fileIcon: "/images/knowledge-base/faq-file-icon.svg",
//     faq: "On which blockchain are EAS NFTs printed and what type of token is utilized?",
//   },
// ];


export default FaqQuestionDetails;
