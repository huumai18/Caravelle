import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import Modal from "react-modal";
import "react-toastify/dist/ReactToastify.css";
import { getMail } from "../../api/Mail";
import { toast, ToastContainer } from "react-toastify";

export const ModalEmail = ({ OpenModal }) => {
  const [success, setSent] = useState(false);

  //value arrayList Message
  const [values, setValues] = useState({
    name: "",
    email: "",
    txtMessage: "",
  });

  const { name, email, txtMessage } = values;
  const handleChange = (vls) => (e) => {
    setValues({ ...values, [vls]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!name || !email || !txtMessage) {
      return toast.error("Please fill out your valid values!");
    } else {
      getMail({ name, email, txtMessage })
        .then((data) => {
          if (data.err) {
            console.log("err", data.err);
          } else {
            console.log("Success", data);
            setValues({ ...values });
            setSent(true);
            return toast.success("Successfully sent your email!");
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
        className="modal-email"
        overlayClassName="over-lay"
      >
        <ToastContainer position="bottom-center" limit={1} />
        <div className="email-modal-box">
          {!success ? (
            <div className="information">
              <h1>Please fill all the form!</h1>
              <div className="form">
                <form onSubmit={handleSend}>
                  <TextField
                    className="input"
                    variant="outlined"
                    label="Name"
                    placeholder="John Wick"
                    type="text"
                    value={name}
                    onChange={handleChange("name")}
                    fullWidth
                  />
                  <TextField
                    className="input"
                    variant="outlined"
                    label="Email"
                    placeholder="abc@gmail.com"
                    type="email"
                    value={email}
                    onChange={handleChange("email")}
                    fullWidth
                  />
                  <textarea
                    rows="6"
                    className="txtmessage"
                    label="Message"
                    placeholder="Write your message here ..."
                    type="text"
                    value={txtMessage}
                    onChange={handleChange("txtMessage")}
                  />
                  <Button type="submit" className="btn-submit">
                    Send
                  </Button>
                </form>
              </div>
            </div>
          ) : (
            <div className="final-done">
              <p>Your email has been sent!</p>
              <Button onClick={() => OpenModal(false)}>Done</Button>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
