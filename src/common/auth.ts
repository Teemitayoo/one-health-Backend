import { Response, NextFunction} from 'express';
import AuthRequest, { jwtPayload } from '../modules/auth/interface/authRequest.interface';
import { NotAuthorizedError } from './error';
import jwt from "jsonwebtoken";



/**
 * This is a middleware to Authenticate protected routes
 * @param req 
 * @param res 
 * @param next 
 */
export const protect = (req: AuthRequest, res: Response, next: NextFunction) => {

    const bearer = req.headers.authorization;
    if (!bearer) {
      throw new NotAuthorizedError('No Authentication Provided');
    }

    const [, token] = bearer.split(' '); // destructuring

    if (!token) {
      throw new NotAuthorizedError('Bearer has no token');
    }
    let payload:jwtPayload;
    try {
      payload = jwt.verify(token, process.env.JWT_SECRET!) as jwtPayload;
  
    } catch (e) {
      throw new NotAuthorizedError('Invalid Token Provided');
    }
    req.user = payload as jwtPayload;
    next();
};
