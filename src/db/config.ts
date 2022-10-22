// import { Sequelize } from 'sequelize-typescript';
// import { BikeModel } from './models/bike'
// import { Bike } from './interfaces/bike.interface'

// export const databaseProviders = [
//   {
//     provide: 'SEQUELIZE',
//     useFactory: async () => {
//       const sequelize = new Sequelize({
//         dialect: 'mysql',
//         host: 'localhost',
//         port: 3306,
//         username: 'root',
//         password: 'password',
//         database: 'nest',
//       });
//       sequelize.addModels([BikeModel]);
//       await sequelize.sync();
//       return sequelize;
//     },
//   },
// ];

import * as dotenv from 'dotenv';
import { IDatabaseConfig } from './interfaces/db-config-interface';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME_DEVELOPMENT,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME_TEST,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME_PRODUCTION,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    },
};
