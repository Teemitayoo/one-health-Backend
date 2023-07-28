import { Request } from "express"

export default interface AuthRequest extends Request {
    user?: jwtPayload
}

export interface jwtPayload {
    username:string
}