const Joi = require("./joi");

const contentSchema = Joi.string().min(5).required();

const todoSchema = Joi.object({
  content: contentSchema,
});

const idSchema = Joi.object({
  id: Joi.objectId(),
});

const updateSchema = Joi.object({
  content: contentSchema,
});

module.exports = {
  todoSchema,
  idSchema,
  updateSchema,
};
