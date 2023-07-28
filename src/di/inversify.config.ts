import { Container } from "inversify";
import IUserRepository, { Types } from "../modules/user/interface/userRepository.interface";
import UserRepository from "../modules/user/user.repository";
import { Types as AuthTypes, IAuthService } from "../modules/auth/interface/authService.interface";
import AuthService from "../modules/auth/auth.service";


const container  = new Container();
container.bind<IUserRepository>(Types.IUserRepository).to(UserRepository)
container.bind<IAuthService>(AuthTypes.IAuthService).to(AuthService)

export default container;

