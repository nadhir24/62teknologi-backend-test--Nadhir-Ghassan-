import { IsString, IsNumber, IsOptional, IsArray, IsBoolean, IsDate, IsObject } from 'class-validator';

export class CreateBusinessDto {
  term: string;

  location: string;

  latitude?: string;

  longitude?: string;

  radius?: number;

  categories?: string[];

  locale: string;

  limit: number;

  offset: number;

  sort_by: string;
  
  price?: string;
 
  open_now?: boolean;

  open_at?: Date;

  attributes?: Record<string, any>;
}
