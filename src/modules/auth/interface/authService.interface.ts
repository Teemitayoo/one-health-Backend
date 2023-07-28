import IUser from "../../user/interface/user.interface";

export interface IAuthService{
    getAccessToken(username:string, password:string):Promise<string>;
    createUser(username:string, user_password:string):Promise<Pick<IUser, "username">>;
}

export const Types = {
    IAuthService: Symbol("IAuthService")
}