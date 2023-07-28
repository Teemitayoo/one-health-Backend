import userModel from "./model/user.model";
import IUser from "./interface/user.interface";
import IUserRepository from "./interface/userRepository.interface";
import { FilterQuery } from "mongoose";
import {injectable} from "inversify";

/**
 * This class is solely responsible for managing calls to our database
 */
@injectable()
class UserRepository implements IUserRepository{
  public async getAllUsers(): Promise<IUser[]> {
    return await userModel.find()
  }

  public async getUserById(id: string): Promise<IUser | null> {
    return await userModel.findById(id);
  }

  public async getUser(param:FilterQuery<IUser>):Promise<IUser | null> {
    return await userModel.findOne(param);

  }

  public async createUser(user: IUser): Promise<IUser> {
    const newUser = await userModel.create(user);
    return newUser.toObject();
  }

  public async updateUser(id: string, updatedUser: IUser): Promise<IUser | null> {
    return await userModel.findByIdAndUpdate(id, updatedUser, { new: true });
  }

  public async deleteUser(id: string): Promise<IUser | null> {
    return await userModel.findByIdAndDelete(id);
  }
}

export default UserRepository;
