import { IsString } from 'class-validator';

export default class SignInDto {
  @IsString()
  username: string;

  @IsString()
  password: string;
}
