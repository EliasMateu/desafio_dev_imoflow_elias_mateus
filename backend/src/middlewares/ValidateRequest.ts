// src/middlewares/validateRequest.ts
import { Request, Response, NextFunction } from "express";
import { ClassConstructor, plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { CustomError } from "../utils/CustomError";

export function validateRequest<T extends object>(
  dtoClass: ClassConstructor<T>,
  skipMissingProperties = false
) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dtoInstance = plainToInstance(dtoClass, req.body);
      const errors = await validate(dtoInstance as object, {
        skipMissingProperties,
      });

      if (errors.length > 0) {
        const formattedErrors = errors.map((error) => ({
          field: error.property,
          errors: error.constraints ? Object.values(error.constraints) : [],
        }));

        throw new CustomError(400, "Validation failed", {
          validationErrors: formattedErrors,
        });
      }

      req.body = dtoInstance;
      next();
    } catch (error) {
      next(error);
    }
  };
}
