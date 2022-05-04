const express = require("express");
const dotenv = require("dotenv");
const mg = require("mailgun-js");

dotenv.config();

const mailgun = () =>
  mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/email", (req, res) => {
  const { name, time, people, email, phone } = req.body;
  mailgun().messages.send(
    {
      from: "Reservation <resrvation.restaurant@gmail.com",
      to: `${email}`,
      subject: `Reservation table`,
      html: `<p>Thank you ${name} for your reservation.<p>
    <br />
    <p> Please come at ${time}`,
    },
    (error, body) => {
      if (error) {
        console.log(error);
        res.status(500).send({ message: "Error in sending email" });
      } else {
        console.log(body);
        res.send({ message: "Email sent successfuly" });
      }
    }
  );
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server run at port ${port}`);
});
