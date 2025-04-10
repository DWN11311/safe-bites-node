const joi = require("joi");

const signUpSchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().optional(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  phone: joi
    .string()
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/)
    .optional(),
  address: joi
    .object({
      country: joi.string(),
      city: joi.string(),
      street: joi.string(),
    })
    .optional(),
  role: joi.string().default("user"),
  image: joi.string().optional().trim(),
});

const updateSchema = joi.object({
  firstName: joi.string().optional(),
  lastName: joi.string().optional(),
  email: joi.string().email().optional(),
  oldPassword: joi.string().optional(),
  newPassword: joi.string().optional(),
  phone: joi
    .string()
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/)
    .optional(),
  address: joi
    .object({
      country: joi.string(),
      city: joi.string(),
      street: joi.string(),
    })
    .optional(),
  image: joi.string().optional().trim(),
});

const signInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

module.exports = { signUpSchema, signInSchema, updateSchema };
