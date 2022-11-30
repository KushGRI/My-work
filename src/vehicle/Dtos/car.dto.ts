import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsDateString,
} from 'class-validator';
import { isDate } from 'util/types';

export enum CarType {
  CAR = 'CAR',
  TRUCK = 'TRUCK',
  BIKE = 'BIKE',
}

export class CarDto {
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  type: CarType;

  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDateString()
  productionDate: Date;
}
