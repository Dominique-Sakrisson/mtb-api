import * as joi from "joi"


 export const createBikeSchema = joi.object({
     name: joi.string()
     .alphanum()
     .min(3)
     .max(25)
     .required(),
     manufacturer: joi.string()
     .alphanum()
     .min(3)
     .max(25)
     .required(),
     model : joi.string()
     .alphanum()
     .min(3)
     .max(25)
     .required(),
     material: joi.string()
     .valid("aluminum", "carbon").required(),
     inStock: joi.boolean().required(),
}).options({
    abortEarly: false,
  });
