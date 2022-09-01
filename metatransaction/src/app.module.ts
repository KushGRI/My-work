import { Module } from '@nestjs/common';
import { MetatransModule } from './metatrans/metatrans.module';

@Module({
  imports: [MetatransModule],
})
export class AppModule {}
