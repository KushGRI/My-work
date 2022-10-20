import { Body, Controller, Post } from '@nestjs/common';
import { ExecuteDto } from './dtos/execute.dto';
import { ScheduleDto } from './dtos/schedule.dto';
import { TimeLockService } from './time-lock.service';

@Controller('time-lock')
export class TimeLockController {
    constructor(
        private timelockService: TimeLockService
    ){}

    @Post('/schedule')
    async schedule(
        @Body() scheduleDto: ScheduleDto): Promise<any>{
        return this.timelockService.schedule(scheduleDto);

    }

    @Post('/execute')
    async execute(
        @Body() executeDto: ExecuteDto): Promise<any>{
        return this.timelockService.execute(executeDto);

    }

    @Post('/cancel')
    async cancel(
        @Body() id: string): Promise<any>{
        return this.timelockService.cancel(id);

    }
}
