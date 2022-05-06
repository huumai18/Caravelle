const express = require("express");
const routes = express.Router();

const { sendMail } = require("../Contoller/mail");

const { getMail } = require("../Contoller/contactEmail");

routes.post("/sendmail", sendMail);
routes.post("/getmail", getMail);
module.exports = routes;
