import { Module } from '@nestjs/common';
import { Blockchain } from './blockchain';
import { TimeLockController } from './time-lock.controller';
import { TimeLockService } from './time-lock.service';

@Module({
  controllers: [TimeLockController],
  providers: [TimeLockService, Blockchain]
})
export class TimeLockModule {}
