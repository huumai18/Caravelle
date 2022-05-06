require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//import routes
const Mail = require("./routers/mail");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api", Mail);

app.listen(port, () => {
  console.log("Server run at port", port);
});
