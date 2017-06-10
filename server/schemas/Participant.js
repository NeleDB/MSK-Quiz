const Joi = require(`joi`);

const schema = {
  answers: {
    type: Array,
    required: true,
    validation: Joi.array()
  }
};

module.exports = {
  schema
};
