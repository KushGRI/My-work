import { Injectable } from '@nestjs/common';
import { Blockchain } from './blockchain';
import { ExecuteDto } from './dtos/execute.dto';
import { ScheduleDto } from './dtos/schedule.dto';

@Injectable()
export class TimeLockService {
    constructor(
        private blochain: Blockchain
    ){}

    async schedule(scheduleDto: ScheduleDto): Promise<any>{
        
        return this.blochain.schedule(scheduleDto);
    }

    async execute(executeDto: ExecuteDto): Promise<any>{
        
        return this.blochain.execute(executeDto);
    }

    
    async cancel(id): Promise<any>{
        
        return this.blochain.cancel(id);
    }
}
