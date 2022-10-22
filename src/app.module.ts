import { ConfigModule } from '@nestjs/config';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './services/app.service';
import { TrailModule } from './trail/trail.module';
import { BikeModule } from './bike/bikes.module';
import { loggerFunc,LoggerMiddleware } from './logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeModel } from './db/models/bike';
import { DatabaseModule } from './db/database.module';


// import { APP_FILTER } from '@nestjs/core';
// import { HttpExceptionFilter } from './http-exception-filter';
// import { AllExceptionsFilter } from './errors/filters/all-exceptions-filter';

@Module({
  imports: [
    DatabaseModule,
    BikeModule, 
    TrailModule, 
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'test',
    //   entities: [BikeModel],
    //   synchronize: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService, 
    /*
    * example of adding a globally scoped exception filter
    * allows for the filter to inject dependencies to the other modules 
    * IF ONLY defined in the /root with useGlobalFilters, depedencies are not injected from the exception filter and must be handled individually if they work at all at the module level 
    * 
    * This pattern can be applied to ANY SINGLE MODULE and it will affect the global scope. Careful where this is applied. 
     */
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
    // {
    //   provide: APP_FILTER,
    //   useClass: AllExceptionsFilter
    // }
    
  ],
})
export class AppModule implements NestModule{
  constructor() {}
  configure(consumer: MiddlewareConsumer) {
    consumer
    /*
    * middleware are applied here for the specific routes mentioned
    * there are global middlewares also set using app.use() located  './src/main.ts' *
    */
    .apply(loggerFunc, LoggerMiddleware)
    .exclude({ path: 'bike', method: RequestMethod.DELETE },)
    .forRoutes({path: 'bike', method: RequestMethod.GET}, {path: 'trail', method: RequestMethod.GET})
  }
}
