const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;
const { errorHandler } = require("./middleware/errorMiddleware.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/cars", require("./routes/carRoutes.js"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//in order to use body data we need middleware
