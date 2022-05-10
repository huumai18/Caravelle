import React, { useState } from "react";
import Modal from "react-modal";
import { ModalEmail } from "./modalEmail";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "@mui/material";

export const ContactModal = ({ OpenModal }) => {
  const [open, handleOpen] = useState(false);
  return (
    <Modal
      isOpen={OpenModal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => OpenModal(false)}
      className="mod-contact"
      overlayClassName="over-lay"
    >
      {/* <ToastContainer position="bottom-center" limit={1} /> */}
      <div className="mod-container">
        <div className="mod-text">
          <div className="mod-header">
            <h2>Contact Us</h2>
          </div>
          <div className="mod-box">
            <div className="mod-phone">
              <p>Phone: (888) 888-8888</p>
              <div className="line-line"></div>
            </div>
            <div className="mod-email">
              <p>
                {" "}
                Email <br />
                <Link className="email-link" onClick={() => handleOpen(true)}>
                  caravelle.reservation@gmail.com
                </Link>
                {open && <ModalEmail OpenModal={handleOpen} />}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
