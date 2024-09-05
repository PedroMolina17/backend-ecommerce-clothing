import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from "@nestjs/common";
import { CartItemService } from "./cart-item.service";
import { CreateCartItemDto } from "./dto/create-cart-item.dto";
import { UpdateCartItemDto } from "./dto/update-cart-item.dto";

@Controller("cart-item")
export class CartItemController {
  constructor(private readonly cartItemService: CartItemService) {}

  @Post()
  async create(@Body() createCartItemDto: CreateCartItemDto) {
    try {
      return await this.cartItemService.create(createCartItemDto);
    } catch (error) {
      if (error.code == "P2002") {
        throw new BadRequestException("El producto ya esta añadido");
      }
    }
  }

  @Get()
  async findAll() {
    return await this.cartItemService.findAll();
  }
  @Get("count")
  Count() {
    return this.cartItemService.countAll();
  }
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.cartItemService.findOne(+id);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateCartItemDto: UpdateCartItemDto,
  ) {
    return await this.cartItemService.update(+id, updateCartItemDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return await this.cartItemService.remove(+id);
  }
}
