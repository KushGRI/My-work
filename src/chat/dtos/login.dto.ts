import { IsNotEmpty,IsEmail } from 'class-validator';
export class LoginInput {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;
}
