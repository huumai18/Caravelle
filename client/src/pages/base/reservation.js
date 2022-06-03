import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { sendMail } from "../../api/Mail";

export const Reservation = () => {
  //values users arrayList
  const [values, setValues] = useState({
    name: "",
    date: "",
    time: "",
    email: "",
    phone: "",
    people: "",
  });
  const { name, date, time, email, phone, people } = values;
  const handleChange = (vls) => (event) => {
    setValues({ ...values, [vls]: event.target.value });
  };

  const handleSend = (event) => {
    event.preventDefault();
    if (!name || !date || !time || !email || !phone || !people) {
      return toast.error("Please fill all the form!");
    } else if (people < 1 || people > 20) {
      return toast.error("Number of people is not valid (must be 1-20)");
    } else {
      sendMail({ name, date, time, email, phone, people })
        .then((data) => {
          if (data.err) {
            console.log("err", data.err);
          } else {
            console.log("Success", data);
            setValues({
              name: "",
              date: "",
              time: "",
              email: "",
              phone: "",
              people: "",
            });
            return toast.success("Your reservation has been sent!");
          }
        })
        .catch(console.log("error in send email!"));
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="title">
          <h1>Reservation</h1>
          <p>
            Please make your reservation below and we will have it served at
            your convenient place, we offer best ever!
          </p>
          <h2>Schedule</h2>
          <p>Monday to Sunday: 11:00 - 00:00 am</p>
        </div>
        <div className="form-text">
          <ToastContainer position="bottom-center" limit={1} />
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
              />
              <TextField
                className="input"
                variant="outlined"
                label="Email"
                placeholder="abc@gmail.com"
                type="email"
                value={email}
                onChange={handleChange("email")}
              />
              <TextField
                className="input"
                variant="outlined"
                label="Phone"
                placeholder="(888) 888-8888"
                type="tel"
                value={phone}
                onChange={handleChange("phone")}
              />
              <TextField
                className="input"
                min={1}
                max={20}
                variant="outlined"
                label="Number People"
                placeholder="(1 - 20)"
                type="number"
                value={people}
                onChange={handleChange("people")}
              />
              <TextField
                className="input"
                variant="outlined"
                type="date"
                value={date}
                onChange={handleChange("date")}
              />
              <TextField
                className="input"
                variant="outlined"
                type="time"
                value={time}
                onChange={handleChange("time")}
              />

              <Button className="button" onClick={handleSend} type="submit">
                Submit Resevation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
