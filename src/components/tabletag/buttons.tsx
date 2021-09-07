import { useState } from "react";
import "./buttons.css"

const listOptions = [
    { text: "DeFi"},
    { text: "NFT"},
    { text: "Play To Earn"},
    { text: "Polkadot"},
    { text: "BSC"},
    { text: "Heco"}

  ];
  
  const Buttons = () => {
    const [activeLink, setActiveLink] = useState(null);
  
    const handleChange = (e:any) => {
      console.log('value', e.target.value); // output: “value somevalue”
      alert('hi');
    }
    const renderList = () => {
      return listOptions.map((option, index:any) => {
        return (
          <button
            value={`${option.text}`}
            key={index}
            onChange={handleChange}
            onClick={() => setActiveLink(index)}
            className={`tabletag__button ${
              activeLink === index ? "active" : ""
            }`}
          >
           {option.text}
          </button>
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