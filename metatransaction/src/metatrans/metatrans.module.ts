import { Module } from '@nestjs/common';
import { MetatransService } from './metatrans.service';
import { MetatransController } from './metatrans.controller';

@Module({
  providers: [MetatransService],
  controllers: [MetatransController]
})
export class MetatransModule {}
