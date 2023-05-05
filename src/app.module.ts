import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatController } from './chat/chat.controller';
import { ChatService } from './chat/chat.service';
import { User } from './chat/user.schema';
import { ChatModule } from './chat/chat.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ChatModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/3000', {
      dbName: 'suicide',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
