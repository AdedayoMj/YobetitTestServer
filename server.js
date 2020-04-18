const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");

require("dotenv").config();
require("./db/db");
const cors = require("cors");

const index = require("./routes/index");
const users = require("./routes/users");
const restCountries = require("./routes/restcountries");

const app = express();
PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
require("./config/passport")(passport);

app.use(index);
app.use("/api/", users);
app.use("/api/", restCountries);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
