import React from "react";
import Modal from "react-modal";
import { Button } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axios } from "axios";

export const ReservationModal = ({ OpenModal }) => {
  const [success, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();
    if (!name || !time || !people || !email || !phone) {
      return toast.error("Please enter your valid information!");
    } else {
      setSent(true);
    }
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/email`, {
        name,
        time,
        people,
        email,
        phone,
      });
      setLoading(false);
      toast.success(data.message);
    } catch (err) {
      setLoading(false);
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      );
    }
  };

  return (
    <Modal
      isOpen={OpenModal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => OpenModal(false)}
      className="mod"
      overlayClassName="over"
    >
      <ToastContainer position="bottom-center" limit={1} />
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
          {!success ? (
            <form onSubmit={handleSend}>
              <div className="infor">
                <label>
                  <h3>NAME</h3>
                </label>
                <input
                  type="text"
                  placeholder="John Wick"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="infor">
                <label>
                  <h3>TIME</h3>
                </label>
                <input
                  type="datetime-local"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div className="infor">
                <label>
                  <h3>PEOPLE</h3>
                </label>
                <input
                  min={0}
                  max={50}
                  type="number"
                  placeholder="0"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="infor">
                <label>
                  <h3>PHONE</h3>
                </label>
                <input
                  type="phone"
                  placeholder="(###) ###-####"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="btn-submit">
                <Button disabled={loading} type="submit">
                  {loading ? "Sending..." : "Reservation"}
                </Button>
              </div>
            </form>
          ) : (
            <>
              <div className="submit-box">
                <>
                  <p>
                    Thank you for your reservation! Please check your email!
                  </p>
                  <br />
                  <Button onClick={() => OpenModal(false)}>Done</Button>
                </>
              </div>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};
