import { ClassConstructor, plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from './error'; 
import logger from '../utils/logging/logger';


/**
 * This is a middleware that validates the user input before passing it to 
 * the controller
 */
export default class RequestValidator {
  static validate = <T extends object>(classInstance: ClassConstructor<T>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      const objectClass = plainToClass(classInstance, req.body);
      await validate(objectClass).then((errors:ValidationError[]) => {
        if (errors.length > 0) {
          let rawErrors: string[] = [];
          for (const error of errors) {
            rawErrors = rawErrors.concat(...rawErrors, Object.values(error.constraints ?? []));
          }
          logger.error(rawErrors);
          next(new BadRequestError('Input validation failed!', rawErrors));
        }
      });
      next();
    };
  };
}
