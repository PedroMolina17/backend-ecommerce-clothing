import { Type } from "class-transformer";
import { IsNumber } from "class-validator";

export class CreateProductSizeDto {
  @IsNumber()
  @Type(() => Number)
  sizeId: number;
  @IsNumber()
  @Type(() => Number)
  productId: number;
}
