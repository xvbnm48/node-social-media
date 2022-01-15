const express = require("express");

const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const helmet = require("helmet");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { userNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

// midleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send("Hello sakura endo");
});

app.listen(8800, () => {
  console.log("Back end server is running on port 8800");
});
