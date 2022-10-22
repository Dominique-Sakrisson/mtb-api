import {Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common'
import { TrailController } from './trail.controller'
import { TrailService } from './trail.service'
import {errorTrailDelete} from '../errors/error-trail-delete';

//@Global() will make a module available globally amongst providers. Great for grabbing a database connection, helper methods etc
// register these global modules only once generally at the root or core module
@Module({
    controllers: [TrailController],
    providers: [TrailService],
    exports: [TrailService]
})

export class TrailModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
        /*
        * middleware are applied here for the specific routes mentioned
        * there are global middlewares also set using app.use() located  './src/main.ts' *
        */
        .apply(errorTrailDelete)
        .forRoutes({path: 'trail', method: RequestMethod.DELETE})
      }
}
