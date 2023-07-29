import { Request } from 'express';
import jwtPayload from './jwtPayload.interface';

export default interface AuthRequest extends Request {
  user?: jwtPayload;
}


