import { Injectable, Inject, CacheKey } from '@nestjs/common';
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

  // TODO: some sort of pagination handling
  async findAll(): Promise<BikeModel[]> {
    const query = {
      limit: 10,
    }
    return this.bikeRepository.findAll<BikeModel>(query);
  }

  async create(bike :{[id: number]: CreateBikeDto} ): Promise<BikeModel> {
    return await this.bikeRepository.create<BikeModel>(bike);
  }

  async findOneByName(name: string): Promise<BikeModel> {
    return await this.bikeRepository.findOne<BikeModel>({ where: { name } });
}
  
async findOneById(id: number): Promise<BikeModel> {
  const query = {
    where : {id},
    attributes: [],
    hooks: false,
  }
  const bikes = await this.bikeRepository.findOne<BikeModel>({ where: { id }})

  return bikes;
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
