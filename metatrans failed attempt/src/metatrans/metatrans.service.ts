import { Injectable } from '@nestjs/common';
import { SignDataDto } from './dtos/signData.dto';
import { WithdrawAmount } from './withdrawamount';

@Injectable()
export class MetaTransService {

    constructor( private withdrawAmount: WithdrawAmount){  
    }

    async withdraw(signDataDto: SignDataDto): Promise<any>{

        return this.withdrawAmount.contractInteract(signDataDto);

    }
}
