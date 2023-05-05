import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginInput } from './dtos/login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { MessageInput } from './dtos/message.dto';
import { OpenAI } from 'langchain/llms/openai';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { PromptTemplate } from 'langchain/prompts';
import {
  AIChatMessage,
  HumanChatMessage,
  SystemChatMessage,
} from 'langchain/schema';
import { ConfigService } from '@nestjs/config';
import { BufferMemory } from 'langchain/memory';
import { ConversationChain } from 'langchain/chains';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private configService: ConfigService,
  ) {}
  async login(loginInput: LoginInput) {
    const { email, name } = loginInput;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      await this.userModel.create({
        email,
        name,
      });
      return {
        message: 'user added',
      };
    } else {
      let OPENAI_API_KEY = this.configService.get('OPENAI_API_KEY');
      const chat = new ChatOpenAI({
        modelName: 'gpt-3.5-turbo',
        openAIApiKey: OPENAI_API_KEY,
        temperature: 1,
      });
      const template = 'Hello I am {name}?';
      const prompt = new PromptTemplate({
        template: template,
        inputVariables: ['name'],
      });
      const req = await prompt.format({ name: name });
      const sm =
        'Your name is Tina.You are a human who is currently working as suicide prevention agent.You can not ask them to connect to local help or to connect anyone else, only you have to talk them out of anything related to suicide or hurting themselves. You can not let them do suicide, it is not an option. Do not talk to them very formally, talk in a friendly way so that they could trust you and relay on you.You can get to them tell any problems about yourself to show them that everyone have problems but we need to fight them, and convey them it is a part of life.Do not give them any abbrupt idea to do anything extreme. Please reply accordingly.';

      const res = await chat.call([
        new SystemChatMessage(sm),
        new HumanChatMessage(req),
      ]);
      await user.chat.push(sm);
      await user.chat.push(req);
      await user.chat.push(res.text);
      await user.save();

      return {
        message: res.text,
      };
    }
  }

  async chat(messageInput: MessageInput) {
    const { email, message } = messageInput;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new BadRequestException('User not logged in');
    }
    const chats = user.chat;
    let OPENAI_API_KEY = this.configService.get('OPENAI_API_KEY');

    const memory = new BufferMemory();

    const model = new ChatOpenAI({
      modelName: 'gpt-3.5-turbo',
      openAIApiKey: OPENAI_API_KEY,
      temperature: 1,
    });
    const chain = new ConversationChain({ llm: model, memory: memory });
    user.chat.push(message);
    const res = await chain.call({ input: message });
    console.log(
      '🚀 ~ file: chat.service.ts:86 ~ ChatService ~ chat ~ res:',
      res,
    );
    user.chat.push(res.respnse);
    await user.save();
    return res.response;
  }
}
