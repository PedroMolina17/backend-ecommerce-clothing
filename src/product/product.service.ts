import { PrismaService } from "./../prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductService {
  constructor(private PrismaService: PrismaService) {}
  async create(createProductDto: CreateProductDto) {
    return await this.PrismaService.product.create({
      data: createProductDto,
      include: { image_cover: true },
    });
  }

  async findAll() {
    return await this.PrismaService.product.findMany({
      include: { image_cover: true },
    });
  }

  async findByName(name: string) {
    const formattedName = name.replace(/-/g, " ");

    return await this.PrismaService.product.findFirst({
      where: {
        name: {
          contains: formattedName,
          mode: "insensitive",
        },
      },
      include: { image_cover: true },
    });
  }

  async findOne(id: number) {
    return await this.PrismaService.product.findUnique({
      where: { id: id },
      include: { image_cover: true },
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.PrismaService.product.update({
      where: { id: id },
      data: updateProductDto,
      include: { image_cover: true },
    });
  }

  async remove(id: number) {
    return await this.PrismaService.product.delete({ where: { id: id } });
  }
}
