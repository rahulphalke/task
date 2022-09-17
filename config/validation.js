

const { check } = require("express-validator");

const userSignupValidation = [
  check("name",     "Name is required").notEmpty(),
  check("email",    "Email is required").notEmpty().isEmail(),
  check("phone",    "Phone Number is required").notEmpty(),
  check("state",    "State is required").notEmpty(),
  check("city",     "City is required").notEmpty(),
  check("zip_code", "Zip Code is required").notEmpty(),
];

const userLoginValidation = [
  check("email", "Email is required").notEmpty(),
  check("password", "Password is required").notEmpty(),
];

module.exports = {
  userSignupValidation,
  userLoginValidation,
};
