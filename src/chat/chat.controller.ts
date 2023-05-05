import { Body, Controller, Post } from '@nestjs/common';
import { LoginInput } from './dtos/login.dto';
import { ChatService } from './chat.service';
import { MessageInput } from './dtos/message.dto';

@Controller('suicide')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Post('login')
  async login(@Body() loginInput: LoginInput) {
    return this.chatService.login(loginInput);
  }

  @Post('chat')
  async chat(@Body() messageInput: MessageInput) {
    return this.chatService.chat(messageInput);
  }
}
