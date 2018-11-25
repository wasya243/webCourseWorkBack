const {STATUS_CODES} = require('http');

module.exports = {
  errorHandlerMiddleWare
};

function composeSchemaValidationErrors(validationErrObj) {
  return Object.keys(validationErrObj).reduce((accumulator, errorKey) => {
    const error = {
      field: validationErrObj[errorKey].path,
      message: validationErrObj[errorKey].message
    };
    accumulator.push(error);
    return accumulator;
  }, []);
}

// basic error handler
function errorHandlerMiddleWare(error, req, res, next) {
  console.error(error);

  const {status = 500, message, name} = error;

  let response = {};

  (name && name === 'ValidationError')
    ? response = {status: 422, message: STATUS_CODES[422]}
    : response = {status, message: STATUS_CODES[status] || 'Unknown error'};

  response.status >= 400 && response.status < 500 && Object.assign(response, {data: response.status === 422 ? composeSchemaValidationErrors(error.errors) : message});

  res.send(response);
}

