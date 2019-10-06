import { Injectable } from '@nestjs/common';
import { Persona } from './Model/Persona.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PersonaService {

    constructor(
        @InjectRepository(Persona)
        private readonly PersonaRepository: Repository<Persona>,
      ) {
      }

      async findAll(){
          return this.PersonaRepository.find();
      }
}
