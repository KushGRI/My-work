import { IsNotEmpty } from "class-validator";

export class ScheduleDto{

    @IsNotEmpty()
    target: string;

    @IsNotEmpty()
    value: number;

    @IsNotEmpty()
    data: string;

    @IsNotEmpty()
    predecessor: string;

    @IsNotEmpty()
    salt: string;

    @IsNotEmpty()
    delay: number;  
    
}

