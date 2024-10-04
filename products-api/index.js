const express = require("express");
const { config } = require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route

app.listen(process.env.PORT, () => {
  console.log(`Base URL: localhost:${process.env.PORT}`);
});

module.exports = app;
