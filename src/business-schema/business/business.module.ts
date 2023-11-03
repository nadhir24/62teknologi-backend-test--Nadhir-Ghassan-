import { Module } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessController } from './business.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { restaurants } from 'models/restaurants';

@Module({
  imports: [SequelizeModule.forFeature([restaurants])],
  controllers: [BusinessController],
  providers: [BusinessService],
})
export class BusinessModule {}
