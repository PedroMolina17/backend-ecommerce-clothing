import { PrismaService } from "./../prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { CreateImageCoverDto } from "./dto/create-image-cover.dto";
import { UpdateImageCoverDto } from "./dto/update-image-cover.dto";

@Injectable()
export class ImageCoverService {
  constructor(private PrismaService: PrismaService) {}
  async create(createImageCoverDto: CreateImageCoverDto) {
    return await this.PrismaService.image_cover.create({
      data: createImageCoverDto,
    });
  }

  async findAll() {
    return await this.PrismaService.image_cover.findMany();
  }

  async findOne(id: number) {
    return await this.PrismaService.image_cover.findUnique({
      where: { id: id },
    });
  }

  async update(id: number, updateImageCoverDto: UpdateImageCoverDto) {
    return await this.PrismaService.image_cover.update({
      where: { id: id },
      data: updateImageCoverDto,
    });
  }

  async remove(id: number) {
    return await this.PrismaService.image_cover.delete({ where: { id: id } });
  }
}
