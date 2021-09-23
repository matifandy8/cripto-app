import React from "react";
import "../Modal.css";
import Form from "./Form";

function ModalLogin({ setOpenModal }: any) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Log In</h1>
          <p>
            New to CoinMarketCap? <a href="#">Create an account</a>
          </p>
          
        </div>
        <div className="body">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default ModalLogin;
