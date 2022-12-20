/*
when we use mongoose to interact with db, we get back a Promise, that's why we need async handler
*/

const asyncHandler = require("express-async-handler");

/*  @desc Get Cars
    @route GET /cars
    @access Private
*/
const getCars = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get cars" });
});

/*  @desc Get A Single Car
    @route GET /cars/:id
    @access Private
*/
const getSingleCar = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get cars by id ${req.params.id}` });
});

/*  @desc Add A New Car
    @route POST /api/cars
    @access Private
*/
const addCar = asyncHandler(async (req, res) => {
  if (!req.body.carName) {
    //TODO check if body is empty
    res.status(400);
    // by default express error sends us html file
    throw new Error("Please Add A Car Name ");
  }
  res.status(200).json({ message: `New car successfully added` });
});

/*  @desc Update A Car
    @route PUT /api/cars/:id
    @access Private
*/
const updateCar = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update a car by id ${req.params.id}` });
});

/*  @desc Delete A  Car
    @route DELETE /api/cars/:id
    @access Private
*/
const deleteCar = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted car by id ${req.params.id}` });
});

module.exports = {
  getCars,
  getSingleCar,
  addCar,
  updateCar,
  deleteCar,
};
