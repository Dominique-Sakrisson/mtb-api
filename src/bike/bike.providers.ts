import {BikeModel} from '../db/models/bike'
import { BIKE_REPOSITORY } from '../../constants';

export const bikeProviders = [
    {
        provide: BIKE_REPOSITORY,
        useValue: BikeModel
    }
]
