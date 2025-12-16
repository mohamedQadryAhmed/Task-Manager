const { CustomAPIError } = require('../errors/CustomErrors.js');

module.exports = (err, req, res, next) => {
  console.error(err.stack);
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({
      success: false,
      error: err.message,
    });
  }

  res.status(500).json({
    success: false,
    error: 'Internal Server Error',
  });
};
