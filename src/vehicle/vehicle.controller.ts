import { Controller, Get, Post } from '@nestjs/common';
import { CarDto } from './Dtos/car.dto';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
  constructor(public vehicleService: VehicleService) {}

  @Post('AddCar')
  async addCar(carDto: CarDto) {
    return await this.vehicleService.addCar(carDto);
  }

  @Post('RemoveCar')
  async removeCar(id) {
    return await this.vehicleService.removeCar(id);
  }

  @Post('UpdateCar')
  async updateCar(carDto: CarDto) {
    return await this.vehicleService.updateCar(carDto);
  }

  @Get('Car')
  async cars(id) {
    return await this.vehicleService.car(id);
  }
}
