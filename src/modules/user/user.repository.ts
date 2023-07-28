import userModel from "./model/user.model";
import IUser from "./model/user.interface";
import IUserRepository from "./interface/userRepository.interface";

/**
 * This class is solely responsible for managing calls to our database
 */
class UserRepository implements IUserRepository{
  public async getAllUsers(): Promise<IUser[]> {
    return userModel.find(); 
  }

  public async getUserById(id: string): Promise<IUser | null> {
    return userModel.findById(id);
  }

  public async createUser(user: IUser): Promise<IUser> {
    return userModel.create(user);
  }

  public async updateUser(id: string, updatedUser: IUser): Promise<IUser | null> {
    return userModel.findByIdAndUpdate(id, updatedUser, { new: true });
  }

  public async deleteUser(id: string): Promise<IUser | null> {
    return userModel.findByIdAndDelete(id);
  }
}

export default UserRepository;
