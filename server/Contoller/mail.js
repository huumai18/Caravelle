const nodeMailer = require("nodemailer");

exports.sendMail = (req, res) => {
  console.log("req body", req.body);
  let userMail = req.body.userEmail;
  let userName = req.body.userName;
  let userTime = req.body.userTime;
  let userPeople = req.body.userPeople;
  let userPhone = req.body.userPhone;

  let transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  var message = {
    from: `Caravelle Restaurant <caravelle.reservation1@gmail.com>`,
    to: userMail,
    subject: "Reservation Confirmation!",
    html: `<p>Hi ${userName},</p>
            <p>Thank you for your reservation!.
            Your time is ${userTime}, and with ${userPeople} people.</p>
            <p>Your phone number is ${userPhone}</p>
            <p>Please contact us ASAP if you need any change!</p>
            <p>Thank you for your reservation!</p>
            <br/>
            
            <p>Caravelle Team.</p>`,
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
