import { Body, Controller, Post } from '@nestjs/common';
import { CreateDogDto } from './Dto/create-dog.dto';

@Controller('dog')
export class DogController {
  @Post()
  async create(@Body() createdogdto: CreateDogDto) {
    return `This action adds a new dog, ${createdogdto.name}`;
  }
}
