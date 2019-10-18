import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from './Model/Libro.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(Libro)
    private readonly LibroRepository: Repository<Libro>,
  ) {}

  async findAll() {
    return this.LibroRepository.find();
  }
}
