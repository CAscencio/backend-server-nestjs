import { Injectable } from '@nestjs/common';
import { Persona } from './Model/Persona.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { getConnection } from "typeorm";

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(Persona)
    private readonly PersonaRepository: Repository<Persona>,
  ) { }

  async findAll() {
    return this.PersonaRepository.find();
  }

  async lectoresActivos(){
    return await getConnection()
    .createQueryBuilder()
    .select(["persona.CODPER","persona.NOMPER","persona.APEPER","persona.TIPPER"])
    .from(Persona, "persona")
    .where("persona.TIPPER = :TIPPER", { TIPPER: 'L'})
    .getMany();
  }
// SERVICIO DE AUTENTICAR EL USUARIO Y CONSTRASENA EN EL LOGIN
 async login(USUPER, PASSPER) {
    return await getConnection()
    .createQueryBuilder()
    .select (["login.CODPER","login.NOMPER","login.APEPER"])
    .from(Persona, "login")
    .where("login.USUPER = :USUPER",{USUPER})
    .andWhere("login.PASSPER = :PASSPER",{PASSPER})
    .getOne();
  }
}
