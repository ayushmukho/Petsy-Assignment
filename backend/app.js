const express = require("express");
const cors = require('cors')
const app = express();

const cookieParser = require("cookie-parser");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

//Using Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//import Routes
const userRoutes = require("./routers/user");
const petRoutes = require("./routers/pet");

app.use("/api/v1", userRoutes);
app.use("/api/v1", petRoutes)

module.exports = app;
