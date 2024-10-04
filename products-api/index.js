const express = require("express");
const { config } = require("dotenv").config();
const categoryRouter = require("./routes/CategoryRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/categories", categoryRouter);

app.listen(process.env.PORT, () => {
  console.log(`Base URL: localhost:${process.env.PORT}`);
});

module.exports = app;
