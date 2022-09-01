import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransferDto } from './Dtos/transfer.Dtos';
import { Erc20Service } from './erc20.service';

@Controller('erc20')
export class Erc20Controller {
    constructor(
        private erc20Service: Erc20Service 
    ){}

        @Post('/:transfer')
        async transferFrom(
            @Body() transferDto: TransferDto): Promise<any>{
            return this.erc20Service.transferFrom(transferDto);
        }

        @Get('/:balance')
        async balance(
            @Body() address: string): Promise<any>{
            return this.erc20Service.balance(address);
        }

}
