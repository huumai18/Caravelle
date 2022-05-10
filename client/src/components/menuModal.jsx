import React from "react";
import Modal from "react-modal";
import { menu } from "../images";

export const MenuModal = ({ OpenModal }) => {
  return (
    <Modal
      isOpen={OpenModal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => OpenModal(false)}
      className="mod"
      overlayClassName="over-lay"
    >
      <div className="menu">
        <img className="menu" src={menu} alt="menu" />
      </div>
    </Modal>
  );
};
