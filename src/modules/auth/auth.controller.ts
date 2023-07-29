import { injectable, inject } from 'inversify';
import { IAuthService, Types } from './interface/authService.interface';
import { Request, Response } from 'express';
import { SignUpDto, SignInDto } from './auth.dto';
import AuthRequest from './interface/authRequest.interface';
import jwtPayload from './interface/jwtPayload.interface';

@injectable()
export default class AuthController {
  constructor(@inject(Types.IAuthService) private readonly service: IAuthService) {}

  signUp = async (req: Request, res: Response) => {
    const { username, password } = req.body as SignUpDto;
    const user = await this.service.createUser(username, password);
    return res.status(200).json({ success: true, data: user });
  };

  signIn = async (req: Request, res: Response) => {
    const { username, password } = req.body as SignInDto;
    const accessToken = await this.service.getAccessToken(username, password);
    return res.status(200).json({ success: true, data: { accessToken } });
  };

  dashboard = async (req: AuthRequest, res: Response) => {
    const { username } = req.user as jwtPayload;
    return res.status(200).json({ success: true, message: `Welcome to your dashboard, ${username}!` });
  };
}
