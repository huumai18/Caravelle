import React from "react";
import Modal from "react-modal";
import { menu } from "../images";
// import { Button } from "@mui/material";
// import { toast, ToastContainer } from "react-toastify";
// import { sendMail } from "../../api/Mail";

export const MenuModal = ({ OpenModal }) => {
  // const [success, setSent] = useState(false);
  // const [loading] = useState(false);

  // //values users arrayList
  // const [values, setValues] = useState({
  //   userName: "",
  //   userTime: "",
  //   userPeople: "",
  //   userEmail: "",
  //   userPhone: "",
  // });

  // const { userName, userTime, userPeople, userEmail, userPhone } = values;
  // const handleChange = (name) => (event) => {
  //   setValues({ ...values, [name]: event.target.value });
  // };

  // const handleSend = (event) => {
  //   event.preventDefault();
  //   if (!userName || !userTime || !userPeople || !userEmail || !userPhone) {
  //     return toast.error("Please fill all the form!");
  //   } else {
  //     sendMail({ userName, userTime, userPeople, userEmail, userPhone })
  //       .then((data) => {
  //         if (data.err) {
  //           console.log("err", data.err);
  //         } else {
  //           console.log("Success", data);
  //           setValues({ ...values });
  //           setSent(true);
  //           return toast.success("Your reservation has been sent!");
  //         }
  //       })
  //       .catch(console.log("error in send email!"));
  //   }
  // };
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
      {/* <ToastContainer position="bottom-center" limit={1} />
      {!success ? (
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
            <form onSubmit={handleSend}>
              <div className="infor">
                <label>
                  <h3>NAME</h3>
                </label>
                <input
                  required
                  type="text"
                  placeholder="John Wick"
                  value={userName}
                  onChange={handleChange("userName")}
                />
              </div>
              <div className="infor">
                <label>
                  <h3>TIME</h3>
                </label>
                <input
                  required
                  type="datetime-local"
                  formTarget="dd-MMM-yy HH:mm"
                  value={userTime}
                  onChange={handleChange("userTime")}
                />
              </div>
              <div className="infor">
                <label>
                  <h3>PEOPLE</h3>
                </label>
                <input
                  required
                  min={0}
                  max={20}
                  type="number"
                  placeholder="0 (max 20 people)"
                  value={userPeople}
                  onChange={handleChange("userPeople")}
                />
              </div>
              <div className="infor">
                <label>
                  <h3>EMAIL</h3>
                </label>
                <input
                  // pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                  type="email"
                  placeholder="abc@gmail.com"
                  value={userEmail}
                  onChange={handleChange("userEmail")}
                  required
                />
              </div>
              <div className="infor">
                <label>
                  <h3>PHONE</h3>
                </label>
                <input
                  required
                  type="phone"
                  placeholder="(###) ###-####"
                  value={userPhone}
                  onChange={handleChange("userPhone")}
                />
              </div>
              <div className="btn-submit">
                <Button disabled={loading} type="submit">
                  {loading ? "Sending..." : "Reservation"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <>
          <div className="submit-box">
            <>
              <p>Thank you for your reservation! Please check your email!</p>
              <br />
              <Button onClick={() => OpenModal(false)}>Done</Button>
            </>
          </div>
        </>
      )} */}
    </Modal>
  );
};
