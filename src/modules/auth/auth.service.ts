import {injectable, inject} from "inversify";
import IUserRepository, { Types } from "../user/interface/userRepository.interface";
import { BadRequestError, NotAuthorizedError } from "../../common/error";
import * as brcypt from "bcrypt";
import jwt from "jsonwebtoken";
import IUser from "../user/interface/user.interface";

/**
 * This class is reponsible for managing the business logic related to Authentication
 */
@injectable()
export default class AuthService {
    constructor(@inject(Types.IUserRepository)private readonly repository: IUserRepository){}

    /**
     * Checks if a user with the username does not already exists.
     * If false, hash the password of the user then create and return the 
     * new user data(excluding the password)
     * @param username 
     * @param user_password 
     */
    async createUser(username:string, user_password:string):Promise<Pick<IUser, "username">>{
        let user = await this.repository.getUser({username})
        if(user){
            throw new BadRequestError("Username already exists, Please try another username")
        }
        const hashedPassword = await brcypt.hash(user_password, 10) as string;
        const newUser = {username, password:hashedPassword} as IUser;
        user = await this.repository.createUser(newUser);
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }

    /**
     * verify that user login details is valid, If false throw an Error.
     * Creates an access token with a set expiration time and return to the client
     * @param username 
     * @param password 
     */
    async getAccessToken(username:string, password:string):Promise<string>{
        let user =  await this.repository.getUser({username})
        if(!user){
            throw new NotAuthorizedError("Invalid Username or Password")
        }
        const comparePassword = await brcypt.compare(password, user.password);
        if(!comparePassword){
            throw new NotAuthorizedError("Invalid Username or Password")
        }
        const accessToken = this.createAccessToken(username);
        return accessToken;
    }

    private createAccessToken(username:string):string{
        const secret = process.env.JWT_SECRET as string;
        const accessToken = jwt.sign({ username }, secret, {expiresIn: process.env.JWT_EXPIRATION_TIME });
        return accessToken;
    }

}