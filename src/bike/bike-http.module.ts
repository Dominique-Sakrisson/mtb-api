import { Module } from '@nestjs/common';
import { BikeService } from './bike.service';
import { BikeController } from './bike.controller';
import { BikeModule } from './bikes.module';

@Module({
  imports: [BikeModule],
  providers: [BikeService],
  controllers: [BikeController]
})
export class UserHttpModule {}
