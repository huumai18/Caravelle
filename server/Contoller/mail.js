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
    from: `Caravelle Service <caravelle.reservation@gmail.com>`,
    to: userMail,
    subject: "Reservation Confirmation!",
    html: `
    <p>Caravelle Restaurant.<br/>
    123 Main Str Calgary A1A1A1<br/>
    (888) 888-8888</p>

    <p>Hi ${userName},</p>
     <p>Thank you for spending your time at Caravelle Restaurant!.<br/> 
     We can't wait to see you on ${userTime}. Your reservation for ${userPeople} people is confirmed.<br/>
     We look forward to your visit and hope we will be enjoying your meal experience at Caravelle Restaurant.
     For any changes please call (888) 888-8888!<br/>
     <p>Reservation Information.<br/>
     ${userName}<br/>
     ${userTime} <br/>
     ${userPhone}<br/>
     ${userPeople} people
     </p>
     <p>We look forward to serving you. Please don't hesitate to contact us for any question!</p>
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
