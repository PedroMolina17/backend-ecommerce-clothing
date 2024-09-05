import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  InternalServerErrorException,
} from "@nestjs/common";
import { ImageCoverService } from "./image-cover.service";
import { CreateImageCoverDto } from "./dto/create-image-cover.dto";
import { UpdateImageCoverDto } from "./dto/update-image-cover.dto";
import { renameImage } from "./helper/image-cover.helper";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

@Controller("image-cover")
export class ImageCoverController {
  constructor(private readonly imageCoverService: ImageCoverService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor("imageCover", {
      storage: diskStorage({
        destination: "./images/image-cover",
        filename: renameImage,
      }),
    }),
  )
  async create(
    @Body() body: CreateImageCoverDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    try {
      if (!file) {
        throw new BadRequestException("File is missing");
      }
      const filePath = `/images/image-cover/${file.filename}`;
      const createImageCoverDto: CreateImageCoverDto = {
        url: filePath,
        productId: Number(body.productId),
      };
      const savedImage =
        await this.imageCoverService.create(createImageCoverDto);
      return savedImage;
    } catch (error) {
      if (error.code === "P2003") {
        throw new BadRequestException(
          `The incidents_id ${body.productId} does not exist`,
        );
      }
      console.log(error);
    }
  }
  @Get()
  async findAll() {
    return await this.imageCoverService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.imageCoverService.findOne(+id);
  }

  @Patch(":id")
  @UseInterceptors(
    FileInterceptor("imageCover", {
      storage: diskStorage({
        destination: "./images/image-cover",
        filename: renameImage,
      }),
    }),
  )
  async update(
    @Param("id") id: string,
    @Body() updateImageCoverDto: UpdateImageCoverDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    try {
      if (file) {
        const filePath = `/images/image-cover/${file.filename}`;
        updateImageCoverDto.url = filePath;
      }

      const updatedImage = await this.imageCoverService.update(
        +id,
        updateImageCoverDto,
      );
      return updatedImage;
    } catch (error) {
      if (error.code === "P2003") {
        throw new BadRequestException(
          `The product_id ${updateImageCoverDto.productId} does not exist`,
        );
      }
      console.log(error);
      throw new InternalServerErrorException("Error updating image cover");
    }
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.imageCoverService.remove(+id);
  }
}
