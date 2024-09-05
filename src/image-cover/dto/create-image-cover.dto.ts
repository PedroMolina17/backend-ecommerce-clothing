import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateImageCoverDto {
  url: string;
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  productId: number;
}
