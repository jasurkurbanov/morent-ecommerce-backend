const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
  if (true) {
    console.error(err.stack);
  } else {
    next(err);
  }
};

module.exports = { errorHandler };
