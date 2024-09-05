import { Module } from "@nestjs/common";
import { SizeModule } from "./size/size.module";
import { ProductModule } from "./product/product.module";
import { ImageCoverModule } from "./image-cover/image-cover.module";
import { PrismaModule } from "./prisma/prisma.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { ProductSizeModule } from './product-size/product-size.module';
import { CartItemModule } from './cart-item/cart-item.module';

@Module({
  imports: [
    SizeModule,
    ProductModule,
    ImageCoverModule,
    PrismaModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "images"),
      serveRoot: "/images",
      serveStaticOptions: {
        index: false,
      },
    }),
    ProductSizeModule,
    CartItemModule,
  ],
})
export class AppModule {}
