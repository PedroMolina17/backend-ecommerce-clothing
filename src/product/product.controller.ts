import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      const data = await this.productService.create(createProductDto);
      return data;
    } catch (error) {
      if ((error.code = "P2002")) {
        throw new BadRequestException("Nombre ya existe");
      }
    }
  }

  @Get()
  async findAll() {
    return await this.productService.findAll();
  }

  @Get("search")
  async findByName(@Query("name") name: string) {
    return await this.productService.findByName(name);
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.productService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productService.remove(+id);
  }
}
