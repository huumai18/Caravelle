import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import Modal from "react-modal";
import { toast, ToastContainer } from "react-toastify";
import { getMail } from "../api/Mail";
import "react-toastify/dist/ReactToastify.css";

export const ContactModal = ({ OpenModal }) => {
  const [success, setSent] = useState(false);

  // values arrayList
  const [values, setValues] = useState({
    nameUser: "",
    email: "",
    txtMessage: "",
  });

  const { nameUser, email, txtMessage } = values;
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!nameUser || !email || !txtMessage) {
      return toast.error("please fill out your valid values!");
    } else {
      getMail({ nameUser, email, txtMessage })
        .then((data) => {
          if (data.err) {
            console.log("err", data.err);
          } else {
            console.log("Success", data);
            setValues({ ...values });
            setSent(true);
            return toast.success("Your reservation has been sent!");
          }
        })
        .catch(console.log("error in send email!"));
    }
  };
  return (
    <>
      <Modal
        isOpen={OpenModal}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => OpenModal(false)}
        className="mod-contact"
        overlayClassName="over-lay-contact"
      >
        <ToastContainer position="bottom-center" limit={1} />
        <div className="mod-container">
          {!success ? (
            <div className="mod-text">
              <div className="mod-header">
                <h2>Contact Us</h2>
              </div>
              <div className="inputBox">
                <form onSubmit={handleSend}>
                  <TextField
                    id="textF"
                    type="text"
                    variant="outlined"
                    label="Your Name"
                    value={nameUser}
                    onChange={handleChange("nameUser")}
                  />
                  <TextField
                    id="textF"
                    type="email"
                    variant="outlined"
                    label="Your Email"
                    value={email}
                    onChange={handleChange("email")}
                  />
                  <TextField
                    id="MessageF"
                    type="text"
                    variant="outlined"
                    label="Your Message ..."
                    value={txtMessage}
                    onChange={handleChange("txtMessage")}
                  />
                  <div className="">
                    <Button type="submit">Submit</Button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <>
              <div className="submit-mess">
                <p>Thank you!</p>
                <br />
                <Button onClick={() => OpenModal(false)}>Done</Button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};
