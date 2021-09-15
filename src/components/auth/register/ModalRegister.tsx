import React from "react";
import "../Modal.css";
import Form from "./Form";

function ModalRegister({ setOpenModal }: any) {
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
          <h1>Create an account</h1>
          <p>
           Already have an account? <a href="#">Log In</a>
          </p>
        </div>
        <div className="body">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default ModalRegister;
