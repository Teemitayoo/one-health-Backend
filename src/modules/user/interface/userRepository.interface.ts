import { FilterQuery } from 'mongoose';
import IUser from './user.interface';

export default interface IUserRepository {
  getAllUsers(): Promise<IUser[]>;
  getUser(param: FilterQuery<IUser>): Promise<IUser | null>;
  getUserById(id: string): Promise<IUser | null>;
  createUser(user: IUser): Promise<IUser>;
  updateUser(id: string, updatedUser: IUser): Promise<IUser | null>;
  deleteUser(id: string): Promise<IUser | null>;
}

export const Types = {
  IUserRepository: Symbol('IUserRepository'),
};
