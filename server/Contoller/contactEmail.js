const nodeMailer = require("nodemailer");

exports.getMail = (req, res) => {
  console.log("req body", req.body);
  let nameUser = req.body.name;
  let email = req.body.email;
  let txtMessage = req.body.txtMessage;

  let transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  var message = {
    from: email,
    to: process.env.EMAIL,
    subject: "Customer message",
    html: `
    From: ${nameUser} <br/>
    Email: ${email} <br/>
    <h2>Customer Message:</h2>
    <h3>${txtMessage}<h3>`,
  };
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log("error in sending mail", err);
      return res.status(400).json({
        message: `error to sending mail ${err}`,
      });
    } else {
      console.log("Successfully send the mail", info);
      return res.json({
        message: info,
      });
    }
  });
};
