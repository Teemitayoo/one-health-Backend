import IUser from "../../modules/user/interface/user.interface";
import jwt from "jsonwebtoken";

/**
   * Creates an access token from the user profile with a set expiration time.
   * @param user - user profile
   * @returns jwt access token to authenticate protected routes
   */
export const createAccessToken = (user: IUser): string=> {
    const secret = process.env.JWT_SECRET as string;
    const accessToken = jwt.sign({ username: user.username, id: user.id }, secret, {
      expiresIn: process.env.JWT_EXPIRATION_TIME,
    });
    return accessToken;
  }