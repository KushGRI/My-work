import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarDto, CarType } from './Dtos/car.dto';
import { Vehicle } from './Schema/vehicle.schema';

@Injectable()
export class VehicleService {
  constructor(
    @InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>,
  ) {}
  async addCar(carDto: CarDto) {
    const { id, name, type, productionDate, price } = carDto;
    const existid = await this.vehicleModel.findOne({ id });
    if (existid) throw new BadRequestException('car already registered');
    if (
      type.toUpperCase() == CarType.BIKE ||
      type.toUpperCase() == CarType.CAR ||
      type.toUpperCase() == CarType.TRUCK
    )
      throw new BadRequestException('invalid car type');
    const vehicle = new this.vehicleModel({
      id,
      name,
      type,
      productionDate,
      price,
    });

    const newVehicle = await vehicle.save();
  }

  async removeCar(id) {
    const existid = await this.vehicleModel.findOne({ id });
    if (!existid) throw new BadRequestException('car not registered');
    await this.vehicleModel.deleteOne({ id });
  }

  async updateCar(carDto: CarDto) {
    const { id, name, type, productionDate, price } = carDto;
    if (
      type.toUpperCase() == CarType.BIKE ||
      type.toUpperCase() == CarType.CAR ||
      type.toUpperCase() == CarType.TRUCK
    )
      throw new BadRequestException('invalid car type');
    const vehicle = await this.vehicleModel.findOne({ id });
    if (!vehicle) throw new BadRequestException('car not registered');
    vehicle.name = name;
    vehicle.type = type;
    vehicle.productionDate = productionDate;
    vehicle.price = price;
    await vehicle.save();
  }

  async car(id) {
    return await this.vehicleModel.findOne({ id });
  }
}
