import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {
    // if make the management you need insert decorator name
    //with decorator name "mazda" your endpoint will be cars/mazda
    @Get('mazda')
    findAll(): string{
        return "Mazda RX7"
    }
}
