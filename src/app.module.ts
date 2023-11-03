import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { BusinessModule } from './business-schema/business/business.module';
import { restaurants } from 'models';

@Module({
  imports: [
   SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'Devtest62',
    models: [],
    autoLoadModels : true,
    synchronize: true,
   }), 
   BusinessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
