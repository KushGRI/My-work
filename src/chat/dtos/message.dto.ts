import { IsNotEmpty, IsEmail } from 'class-validator';
export class MessageInput {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  message: string;
}
