import { Module } from '@nestjs/common';
import { VehicleModule } from './vehicle/vehicle.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    VehicleModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGO_DB_URI'), //config service removed
        name: 'VehicleDB',
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
