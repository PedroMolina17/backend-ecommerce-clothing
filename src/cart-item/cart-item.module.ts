import { Module } from "@nestjs/common";
import { CartItemService } from "./cart-item.service";
import { CartItemController } from "./cart-item.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [CartItemController],
  providers: [CartItemService],
  imports: [PrismaModule],
})
export class CartItemModule {}
