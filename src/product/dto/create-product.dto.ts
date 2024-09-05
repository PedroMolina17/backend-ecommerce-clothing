import { Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  color: string;
  @Type(() => Number)
  @IsNumber()
  price: number;
}
