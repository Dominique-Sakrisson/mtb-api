import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BIKE_REPOSITORY } from '../../constants';
import { BikeModel } from '../db/models/bike';
import { NotFoundException } from '../errors/not-found-exception'
import { Bike } from '../db/interfaces/bike.interface';
import { CreateBikeDto } from '../db/dto/create-bike.dto';

@Injectable()
export class BikeService {
  // private readonly bikes: Bike[] = []

  constructor(
    @Inject(BIKE_REPOSITORY)
    private readonly bikeRepository: typeof BikeModel
  ){}

  async findAll(): Promise<BikeModel[]> {
    // console.log("gogekjrgm")
    // return this.bikeRepository.find();
    return this.bikeRepository.findAll<BikeModel>();
  }

  // TODO: find out why 
  // create(bike: CreateBikeDto): Promise<BikeModel> {
    // this.bikes.push(bike)
    // return await this.bikeRepository.create<BikeModel>(bike);
  // }
// DOesnt work 

  async create(bike :{[id: number]: CreateBikeDto}  /*CreateBikeDto*/): Promise<BikeModel> {
    // this.bikes.push(bike)
    return await this.bikeRepository.create<BikeModel>(bike);
  }

  async findOneByName(name: string): Promise<BikeModel> {
    return await this.bikeRepository.findOne<BikeModel>({ where: { name } });
}
  
  findOne(id: number): Promise<BikeModel> {
    return this.bikeRepository.findByPk<BikeModel>(id);
  }

  // async remove(id: number): Promise<void> {
  //   await this.bikeRepository.delete(id);
  // }


 
  // findAll(): Bike[] {
  //   // throw new NotFoundException()
  //   return this.bikes;
  // }

  // findOne(id: number,) : Bike[]{
  //   console.log('bitch')
  //   const bike =this.bikes.map(bike => {
  //     if(bike.id === id) return bike;
  //   })
  //   return bike;
  // }


  


}
