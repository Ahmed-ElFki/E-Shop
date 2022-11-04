const Joi = require("@hapi/joi");

const JoiProductRegisterValidation = (productData) => {
  const JoiProductValidator = Joi.object({
    name: Joi.string().required().min(3),
    price: Joi.number().required(),
    description: Joi.string().required(),
    picture: Joi.string().min(3).required(),
  });
  return JoiProductValidator.validate(productData, { abortEarly: false });
};

module.exports.JoiProductRegisterValidation = JoiProductRegisterValidation;
