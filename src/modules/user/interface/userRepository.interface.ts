// user.repository.interface.ts
import IUser from "../model/user.interface";

export default interface IUserRepository {
  getAllUsers(): Promise<IUser[]>;
  getUserById(id: string): Promise<IUser | null>;
  createUser(user: IUser): Promise<IUser>;
  updateUser(id: string, updatedUser: IUser): Promise<IUser | null>;
  deleteUser(id: string): Promise<IUser | null>;
}

export const Types = {
    IUserRepository: Symbol("IUserRepository")
}