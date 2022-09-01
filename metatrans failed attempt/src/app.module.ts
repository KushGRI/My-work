import { Module } from '@nestjs/common';
import { MetaTransService } from './metatrans/metatrans.service';
import { MetatransController } from './metatrans/metatrans.controller';
import { WithdrawAmount } from './metatrans/withdrawamount';



@Module({
  imports: [WithdrawAmount],
  providers: [MetaTransService,],
  controllers: [MetatransController],

})
export class AppModule {}
