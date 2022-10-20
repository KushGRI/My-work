import { Module } from '@nestjs/common';
import { TimeLockModule } from './time-lock/time-lock.module';


@Module({
  imports: [TimeLockModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
