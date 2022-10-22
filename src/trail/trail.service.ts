import { Injectable } from '@nestjs/common';
import { TrailController } from './trail.controller';
import { Trail } from '../db/interfaces/trail.interface';

@Injectable()
export class TrailService {
  private readonly trails: Trail[] = []

  create(trail: Trail){
    this.trails.push(trail)
  }
  
  findOne(id: number,){
    return this.trails.filter( trail => {
      this.findById(trail, id)
    })
    // return this.findById(id);
  }

  
  findAll(): Trail[] {
    return this.trails;
  }

  private findById(trail: Trail, id : number){
    if(trail.id === id) return trail;

    // for(let i = 0; i < this.trails.length; i++){
    //   if(this.trails[i].id === id){
    //     return this.trails[i];
    //   }
    // }
  }
}
