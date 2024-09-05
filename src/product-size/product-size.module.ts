import { Module } from "@nestjs/common";
import { ProductSizeService } from "./product-size.service";
import { ProductSizeController } from "./product-size.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [ProductSizeController],
  providers: [ProductSizeService],
  imports: [PrismaModule],
})
export class ProductSizeModule {}
