import { Controller, Get,  Post, Res, HttpStatus, Body } from '@nestjs/common';
import { Response } from 'express';
import { Car } from './interfaces/cars.interface';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { CarsService } from './cars.service';
import { CreateCarsDto } from './dto/Create-car.dto';

@Controller('cars')
export class CarsController {

    constructor(private carsService: CarsService) {}

    @Post()
    async create(@Body() createCarsDto: CreateCarsDto) {
        this.carsService.create(createCarsDto);
    }

    @Get()
    async findAll(): Promise<Car[]> {
        return this.carsService.findAll();
    }
}
