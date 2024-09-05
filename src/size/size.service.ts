import { ImageCover } from "./../image-cover/entities/image-cover.entity";
import { PrismaService } from "./../prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { CreateSizeDto } from "./dto/create-size.dto";
import { UpdateSizeDto } from "./dto/update-size.dto";

@Injectable()
export class SizeService {
  constructor(private PrismaService: PrismaService) {}
  async create(createSizeDto: CreateSizeDto) {
    await this.PrismaService.size.create({ data: createSizeDto });
  }

  async findAll() {
    return await this.PrismaService.size.findMany();
  }

  async findOne(id: number) {
    await this.PrismaService.size.findUnique({ where: { id: id } });
  }

  async update(id: number, updateSizeDto: UpdateSizeDto) {
    await this.PrismaService.size.update({
      where: { id: id },
      data: updateSizeDto,
    });
  }

  async remove(id: number) {
    await this.PrismaService.size.delete({ where: { id: id } });
  }
}
