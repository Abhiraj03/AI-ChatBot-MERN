import { NextFunction, Request, Response } from "express";
import { body, ValidationChain, validationResult } from "express-validator";

export const validate = (validations: ValidationChain[]) => {
    return async (req:Request, res:Response, next:NextFunction) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if(!result.isEmpty()) {
                break;
            }
        }
        const errors = validationResult(req);
        if(errors.isEmpty()){
            return next();
        }
        res.status(422).json({errors:errors.array()});
    };
};

export const signupValidator = [
    body("name").notEmpty().withMessage("Name is Required."),
    body("email").trim().isEmail().withMessage("Email is Required."),
    body("password").trim().isLength({min:6}).withMessage("Password should contain at least 6 characters."),
];
