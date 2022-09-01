import { Body, Controller, Get } from '@nestjs/common';
import { SignDataDto } from './dtos/signData.dto';
import { MetatransService } from './metatrans.service';

@Controller('metatrans')
export class MetatransController {

     constructor( 
         private metaTransService: MetatransService
         )
    {}

    @Get()
    async getWithdraw(
        @Body() signdataDto: SignDataDto): Promise<any>{

           const address = await this.metaTransService.withdraw(signdataDto);
           return address;
        }

}
