// It is common regex for validation of firstName, lastName, address .etc
const commonRegex = /(^[_,.]|[!@#$%^&*()?":{}|<>])/;

const commonValidator = function (value) {
  return !commonRegex.test(value);
};

module.exports = {
  address: {
    validator: commonValidator,
    errorMessage: 'Invalid address format'
  },
  email: {
    regex: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    errorMessage: 'Invalid email format.'
  },
  phoneNumber: {
    regex: /^\+?[1-9]\d{1,14}$/,
    errorMessage: 'Invalid phone number format.'
  },
  firstName: {
    validator: commonValidator,
    errorMessage: 'Invalid first name.'
  },
  lastName: {
    validator: commonValidator,
    errorMessage: 'Invalid last name.'
  },
  password: {
    minLength: 6,
    maxLength: 15
  },
  manufacturer: {
    validator: commonValidator,
    errorMessage: 'Invalid manufacturer format'
  },
  categoryName: {
    validator: commonValidator,
    errorMessage: 'Invalid category name format'
  }
};

// regexp to validate phone number in  E.164 format
