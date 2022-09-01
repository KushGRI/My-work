import { Module } from '@nestjs/common';
import { Erc20Controller } from './erc20.controller';
import { Erc20Service } from './erc20.service';
import { Erc20Web3 } from './erc20web3';

@Module({
    imports: [],
    controllers: [ Erc20Controller],
    providers: [Erc20Service],
})
export class Erc20Module {}
