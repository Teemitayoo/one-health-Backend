import { Container } from "inversify";
import IUserRepository, { Types } from "../modules/user/interface/userRepository.interface";
import UserRepository from "../modules/user/user.repository";


const container  = new Container();
container.bind<IUserRepository>(Types.IUserRepository).to(UserRepository)


