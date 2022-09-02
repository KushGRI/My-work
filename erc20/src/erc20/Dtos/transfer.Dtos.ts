import { IsNotEmpty } from "class-validator";


export class TransferDto{
    
    @IsNotEmpty()
    userAddress: string;

    @IsNotEmpty()
    toAddress: string;

    @IsNotEmpty()
    amount: number;

    @IsNotEmpty()
    nounce: number;

    @IsNotEmpty()
    sign: string;
}