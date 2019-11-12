import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from './Model/Libro.entity';
import { Repository, UpdateResult } from 'typeorm';

import { getConnection } from "typeorm";

@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(Libro)
    private readonly LibroRepository: Repository<Libro>,
  ) {}

  async findAll() {
    return this.LibroRepository.find();
  }

  async librosDatos(){
    return await getConnection()
    .createQueryBuilder()
    .select(["libro.CODLIB","libro.TITLIB","libro.CANTLIB"])
    .from(Libro, "libro")
    .getMany()
  }

  //ACTUALIZAR
  async update(libro: Libro): Promise<UpdateResult> {
    return await this.LibroRepository.update(libro.CODLIB, libro);
}
}
