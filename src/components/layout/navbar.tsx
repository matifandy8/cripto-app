import { useState } from "react";
import ModalLogin from "../auth/login/ModalLogin";
import ModalRegister from "../auth/register/ModalRegister";
import "./navbar.css";

const Navbar: React.FC = () => {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);


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
            <button className="login" onClick={() => {
          setLoginModalOpen(true);
        }}>Log In</button>
            <button className="signin openModalBtn"
        onClick={() => {
          setRegisterModalOpen(true);
        }}>Sign Up</button>
      </div>
       {registerModalOpen && <ModalRegister setOpenModal={setRegisterModalOpen} />}
       {loginModalOpen && <ModalLogin setOpenModal={setLoginModalOpen} />}

    </div>
  );
};

export default Navbar;
