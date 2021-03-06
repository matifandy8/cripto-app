import { useState } from "react";
import ModalLogin from "../auth/login/ModalLogin";
import ModalRegister from "../auth/register/ModalRegister";
import "./navbar.css";
import { Link, useHistory } from "react-router-dom";
import user from "../../assets/profile.png";

const Navbar: React.FC = () => {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const history = useHistory();

  const handleLogoutClick = () => {
    alert("Success Logout")
    localStorage.removeItem("token");
    window.location.reload(); 
  };

  const authButton = () => {
    if (localStorage.getItem("token") === null) {
      return (
        <div>
          <button
            className="login"
            onClick={() => {
              setLoginModalOpen(true);
            }}
          >
            Log In
          </button>
          <button
            className="signin openModalBtn"
            onClick={() => {
              setRegisterModalOpen(true);
            }}
          >
            Sign Up
          </button>
        </div>
      );
    } else {
      return (
        <div className="dropdown">
          <img className="dropbtn" src={user} />
          <div className="dropdown-content">
            <div className="dropdown-profile">
              <Link to="/settings">
                <img className="img-profile" src={user} />
                <p className="text-profile">View my profile</p>
              </Link>
            </div>
            <Link to="/watchlist">Watchlist</Link>
            <Link to="/portfolio ">Portfolio</Link>
            <Link to="/settings">Account Settings</Link>
            <button className="logout" onClick={handleLogoutClick}>
              Log out
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">Cripto Logo</div>
      <div className="navbar__links">
        <ul>
          <li>
            <a href="/">Cryptocurrencies</a>
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
      <div className="navbar__auth">{authButton()}</div>
      {registerModalOpen && (
        <ModalRegister setOpenModal={setRegisterModalOpen} />
      )}
      {loginModalOpen && <ModalLogin setOpenModal={setLoginModalOpen} />}
    </div>
  );
};

export default Navbar;
