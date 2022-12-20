const express = require("express");
const port = process.env.PORT || 5000;
require("dotenv").config();

const app = express();

app.use("/cars", require("./routes/carsRoutes"));

app.get("/cars/:id", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*
app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});
 */
