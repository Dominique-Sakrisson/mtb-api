import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeService } from './bike.service';
import { BikeController } from './bike.controller';
import {BikeModel} from '../db/models/bike'
import {DatabaseModule} from '../db/database.module'
import { bikeProviders } from './bike.providers';

@Module({
    imports: [DatabaseModule],
    controllers:[BikeController],
    providers : [
        BikeService, 
        ...bikeProviders,
    ],
    exports: [BikeService]
})

export class BikeModule{}
