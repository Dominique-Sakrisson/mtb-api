import { Controller, Req, Get, Query, Post, Body, Put, Param, Delete, UseFilters, HttpException, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { CreateBikeDto } from '../db/dto/create-bike.dto'
import {BikeModel} from '../db/models/bike'
import { UpdateBikeDto } from '../db/dto/update-bike.dto'
import { BikeService } from './bike.service';
import { Bike } from '../db/interfaces/bike.interface';

@Controller('bike')
export class BikeController {
    constructor(private bikeService: BikeService) {}

    @Post()
    create(@Body() createBikeDto: {[id: number]: BikeModel}){
      // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
       return this.bikeService.create(createBikeDto)
    }

    @Get() // GET /bikes
    async findAll(): Promise<BikeModel[]>{
        return this.bikeService.findAll();
    }
    
    @Get(':id') // GET /bikes
    async findOne(@Param('id', ParseIntPipe) params): Promise<BikeModel> {
        const { id } = params;
        console.log('wtf')
        const result = this.bikeService.findOne(id);
        console.log(result)
        return result;
        // return `This returns bike id:${id} known to BikeBin™`
    }

    @Put(':id')
  update(@Param('id') id: string, @Body() updateBikeDto: UpdateBikeDto) {
    return `This action updates a #${id} bike ${JSON.stringify(updateBikeDto)}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} bike`;
  }
}
