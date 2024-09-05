import { PrismaService } from "./../prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { CreateProductSizeDto } from "./dto/create-product-size.dto";
import { UpdateProductSizeDto } from "./dto/update-product-size.dto";

@Injectable()
export class ProductSizeService {
  constructor(private PrismaService: PrismaService) {}
  async create(createProductSizeDto: CreateProductSizeDto) {
    return await this.PrismaService.productSize.create({
      data: createProductSizeDto,
    });
  }

  async findAll() {
    return await this.PrismaService.productSize.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} productSize`;
  }

  update(id: number, updateProductSizeDto: UpdateProductSizeDto) {
    return `This action updates a #${id} productSize`;
  }

  remove(id: number) {
    return `This action removes a #${id} productSize`;
  }
}
