import { useState } from "react";
import "./navbar.css";

const Navbar: React.FC = () => {
 

  return (
    <div className="navbar">
      <div className="navbar__logo">Cripto Logo</div>
      <div className="navbar__links">
        <ul>
          <li>
            <a href="/Cryptocurrencies">Cryptocurrencies</a>
          </li>
          <li>
            <a href="/exchanges">Exchanges</a>
          </li>
          <li>
            <a href="/fiats">Fiats</a>
          </li>
          <li>
            <a href="/blockchain">Blockchain</a>
          </li>
        </ul>
      </div>
      <div className="navbar__auth">
            <button className="login">Log In</button>
            <button className="signin">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
