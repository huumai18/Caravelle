import React from "react";
import Modal from "react-modal";
import { Button } from "@mui/material";

export const ReservationModal = ({ OpenModal }) => {
  return (
    <Modal
      isOpen={OpenModal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => OpenModal(false)}
      className="mod"
      overlayClassName="over"
    >
      <div className="modal-box">
        <div className="reservation-left">
          <div className="top">
            <h1>MAKE A RESERVATION</h1>
          </div>
          <div className="midle">
            <h3>
              <p>Fill out the form and submit your reservation</p>
            </h3>
          </div>
          <div className="end">
            <h3>
              <p>
                Moday 11:00 - 00 <br />
                Tuesday: 11:00 - 00 <br />
                Wednesday: 11:00 - 00 <br />
                Thursday: 11:00 - 00 <br />
                Friday: 11:00 - 00 <br />
                Saturday: 11:00 - 00 <br />
                Sunday: 11:00 - 00 <br />
              </p>
            </h3>
          </div>
        </div>
        <div className="reservation-right">
          <form action="/">
            <div className="infor">
              <label>
                <h3>FULLNAME</h3>
              </label>
              <input type="text" placeholder="John Wick" pattern="[A-Z][a-z]" />
            </div>
            <div className="infor">
              <label>
                <h3>TIME</h3>
              </label>
              <input type="datetime-local" />
            </div>
            <div className="infor">
              <label>
                <h3>PEOPLE</h3>
              </label>
              <input min={0} max={50} type="number" placeholder="0" />
            </div>
            <div className="infor">
              <label>
                <h3>EMAIL</h3>
              </label>
              <input
                pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                type="email"
                placeholder="abc@gmail.com"
                required
              />
            </div>
            <div className="infor">
              <label>
                <h3>PHONE</h3>
              </label>
              <input type="phone" placeholder="(###) ###-####" />
            </div>
            <div className="btn-submit">
              <Button>Submit Reservation</Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};
