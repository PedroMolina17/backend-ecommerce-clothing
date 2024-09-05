import { PrismaService } from "./../prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { CreateCartItemDto } from "./dto/create-cart-item.dto";
import { UpdateCartItemDto } from "./dto/update-cart-item.dto";

@Injectable()
export class CartItemService {
  constructor(private PrismaService: PrismaService) {}
  async create(createCartItemDto: CreateCartItemDto) {
    return await this.PrismaService.cartItem.create({
      data: createCartItemDto,
    });
  }

  async findAll() {
    return await this.PrismaService.cartItem.findMany({
      include: { product: { include: { image_cover: true } } },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} cartItem`;
  }

  async countAll() {
    return await this.PrismaService.cartItem.count();
  }

  async update(id: number, updateCartItemDto: UpdateCartItemDto) {
    return await this.PrismaService.cartItem.update({
      where: { id: id },
      data: updateCartItemDto,
    });
  }

  async remove(id: number) {
    return await this.PrismaService.cartItem.delete({ where: { id: id } });
  }
}
