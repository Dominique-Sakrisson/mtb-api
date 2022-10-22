import { Controller, Req, Get, Query, Post, Body, Put, Param, Delete, HttpException, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { TrailService }from './trail.service'
import { CreateTrailDto } from '../db/dto/create-trail.dto';
import { UpdateTrailDto} from '../db/dto/update-trail.dto';
import { Trail } from '../db/interfaces/trail.interface';

@Controller('trail')
export class TrailController {
    constructor(private trailService: TrailService) {}

    
    @Post()
    create(@Body() createTrailDto: CreateTrailDto){
       return this.trailService.create(createTrailDto)
    }

    // @Get() // GET /trails
    // async findAll(): Promise<Trail[]>{
    //     return this.trailService.findAll();
    // }
    
    @Get(':id') // GET /trails
    async findOne(@Param('id', ParseIntPipe) id: number ){
        return this.trailService.findOne(id);
        // return `This returns trail id:${id} known to BikeBin™`
    }

    @Put(':id')
  update(@Param('id') id: string, @Body() updateTrailDto: UpdateTrailDto) {
    return `This action updates a #${id} bike ${JSON.stringify(updateTrailDto)}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    
    return `This action removes a #${id} bike`;
  }
}
