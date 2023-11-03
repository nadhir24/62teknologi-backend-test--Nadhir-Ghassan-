import { IsString, IsNumber, IsArray, IsBoolean, IsDate, IsObject, isString } from 'class-validator';

export class UpdateBusinessDto {
    name: string;

  location: string;

  latitude: string;

  longitude: string;

  radius: number;

  categories: string[];

  locale: string;

  limit: number;

  offset: number;

  sort_by: string;

  price: string;

  open_now: boolean;

  open_at: Date;

  attributes: Record<string, any>;
}
