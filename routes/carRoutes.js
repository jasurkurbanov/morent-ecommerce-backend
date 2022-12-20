const express = require("express");
const router = express.Router();
const {
  getCars,
  getSingleCar,
  addCar,
  updateCar,
  deleteCar,
} = require("../controllers/carController");

router.route("/").get(getCars).post(addCar);
router.route("/:id").get(getSingleCar).put(updateCar).delete(deleteCar);

module.exports = router;
