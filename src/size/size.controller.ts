import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { SizeService } from "./size.service";
import { CreateSizeDto } from "./dto/create-size.dto";
import { UpdateSizeDto } from "./dto/update-size.dto";

@Controller("size")
export class SizeController {
  constructor(private readonly sizeService: SizeService) {}

  @Post()
  async create(@Body() createSizeDto: CreateSizeDto) {
    const data = await this.sizeService.create(createSizeDto);
    return data;
  }

  @Get()
  async findAll() {
    return await this.sizeService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.sizeService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateSizeDto: UpdateSizeDto) {
    return this.sizeService.update(+id, updateSizeDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.sizeService.remove(+id);
  }
}
