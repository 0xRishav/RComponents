import React, { useState } from "react";
import { Modal } from "../../components";
import "./ModalContainer.css";

function ModalContainer() {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  return (
    <div className="container">
      <main>
        <h1>React Modal</h1>
        <Modal show={show} handleClose={hideModal}>
          <h4>Hey, I am Modal</h4>
        </Modal>
        <button type="button" onClick={showModal}>
          Open
        </button>
      </main>
    </div>
  );
}

export default ModalContainer;
