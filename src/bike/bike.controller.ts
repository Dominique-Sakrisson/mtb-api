import { Controller, Req, Get, Query, Post, Body, Put, Param, Delete, UseFilters, HttpException, HttpStatus, ParseIntPipe, UsePipes } from '@nestjs/common';
import { CreateBikeDto } from '../db/dto/create-bike.dto'
import {BikeModel} from '../db/models/bike'
import { UpdateBikeDto } from '../db/dto/update-bike.dto'
import { BikeService } from './bike.service';
import { Bike } from '../db/interfaces/bike.interface';
import { JoiValidationPipe } from '../validation.pipe';
import {CreateBikeValidationPipe} from '../create-bike-validation-pipe';
import {createBikeSchema} from '../bike/create-bike-schema';
@Controller('bike')
export class BikeController {
    constructor(private bikeService: BikeService) {}

    @Post()
    @UsePipes(new CreateBikeValidationPipe())
    create(@Body() createBikeDto: {[id: number]: BikeModel}){
      // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
       return this.bikeService.create(createBikeDto)
    }

   
    @Get() // GET /bikes
    async findAll(): Promise<BikeModel[]>{
      console.log("hey world");
        return this.bikeService.findAll();
    }

    /* Bike route handler for findOne bike with the id of the id argument
    *
    *@param {number} id - The id that should be shared with a Bike from the database
    */
   // route handler method, binding ParseIntPipe
    @Get(':id') // GET /bikes
    //passing the class ParseIntPipe to leave responsibility  for instantiation to the framework and using dependency injection
    // async findOne(@Param('id', ParseIntPipe) params): Promise<BikeModel> {
    // Passing an in-place instance  for ParseIntPipe to allow customizing the pipes behavior
    async findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id): Promise<BikeModel> {
        const result = await this.bikeService.findOneById(id);
        return result;
    }
    // @Get('name')
    // async findOneByName(@Param('name', Parse))
    
    
    @Put(':id')
  update(@Param('id') id: string, @Body() updateBikeDto: UpdateBikeDto) {
    return `This action updates a #${id} bike ${JSON.stringify(updateBikeDto)}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} bike`;
  }
}
