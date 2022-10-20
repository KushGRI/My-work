import { IsNotEmpty } from "class-validator";

export class ExecuteDto{

    @IsNotEmpty()
    target: string;

    @IsNotEmpty()
    value: number;

    @IsNotEmpty()
    payload: string;

    @IsNotEmpty()
    predecessor: string;

    @IsNotEmpty()
    salt: string;

}