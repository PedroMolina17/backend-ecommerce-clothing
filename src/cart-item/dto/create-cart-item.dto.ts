import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";

export class CreateCartItemDto {
  @IsNotEmpty()
  @Type(() => Number)
  quantity: number;
  @IsNotEmpty()
  @Type(() => Number)
  productId: number;
}
