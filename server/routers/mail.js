const express = require("express");
const routes = express.Router();

const { sendMail } = require("../Contoller/mail");

const { getMail } = require("../Contoller/contactEmail");

routes.post("/sendmail", sendMail);
routes.post("/getmail", getMail);

routes.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      messsage: "Get data has susccessfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});
module.exports = routes;
