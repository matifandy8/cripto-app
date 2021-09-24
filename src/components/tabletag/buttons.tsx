import { useState } from "react";
import { Link } from "react-router-dom";
import "./buttons.css"

const listOptions = [
    {route: "/defi", text: "DeFi"},
    {route: "/nft", text: "NFT"},
    {route: "/playtoearn", text: "Play To Earn"},
    {route: "/polkadot", text: "Polkadot"},
    {route: "/bsc", text: "BSC"},
    {route: "/heco", text: "Heco"}

  ];
  
  const Buttons = () => {
   
    const renderList = () => {
      return listOptions.map((option, index:any) => {
        return (
          <Link
          to={option.route}
            key={index}
            className="tabletag__button"
          >
           {option.text}
          </Link>
        );
      });
    };
    return (
        <div className="tabletag">
              {renderList()}
        </div>
      );
  }
    export default Buttons;