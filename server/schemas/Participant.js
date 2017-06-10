const Joi = require(`joi`);

const schema = {
  answers: {
    type: Array,
    required: true,
    validation: Joi.array()
  },
  email: {
    type: String,
    required: true,
    validation: Joi.string()
  }
};

module.exports = {
  schema
};
