import { Injectable, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { restaurants } from 'models';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
@Injectable()
export class BusinessService {
  constructor(
    @InjectModel(restaurants)
    private restaurantModel: typeof restaurants,
    private sequelize: Sequelize,

   
  ) {}
  create(createBusinessDto: CreateBusinessDto) {
    return this.restaurantModel.create(createBusinessDto);
  }

  findAll() {
    const data = this.restaurantModel.findAll();
    return data; 
  }

  findOne(id: number) {
    const data = this.restaurantModel.findByPk(id);
    try {
      return data;
    }catch{
      throw new NotFoundException('Not found');
    }  }

  async update(id: number, updateBusinessDto: UpdateBusinessDto) {
    try {
      const [updatedCount] = await this.restaurantModel.update(
        {
          name: updateBusinessDto.name,
          location: updateBusinessDto.location,
          latitude: updateBusinessDto.latitude,
          longitude: updateBusinessDto.longitude,
          radius: updateBusinessDto.radius,
          categories: updateBusinessDto.categories,
          locale: updateBusinessDto.locale,
          limit: updateBusinessDto.limit,
          offset: updateBusinessDto.offset,
          sort_by: updateBusinessDto.sort_by,
          price: updateBusinessDto.price,
          open_now: updateBusinessDto.open_now,
          open_at: updateBusinessDto.open_at,
          attributes: updateBusinessDto.attributes,
        },
        {
          where: {
            id: id,
          },
        }
      );
  
      if (updatedCount === 0) {
        throw new NotFoundException(`Business with id #${id} not found`);
      }
  
      return { statusCode: HttpStatus.OK, message: 'Update success' };
    } catch (e) {
      return { statusCode: HttpStatus.BAD_REQUEST, message: e };
    }
  }
  

  async remove(id: number) {
    const restaurant = await this.restaurantModel.findByPk(id);

    if (!restaurant) {
      throw new NotFoundException(`Business with id #${id} not found`);
    }

    await restaurant.destroy();

    return {message : 'Business deleted successfully'};
  }
}
