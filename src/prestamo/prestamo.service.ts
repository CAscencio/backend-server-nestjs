import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prestamo } from './Model/Prestamo.entity';
import { Repository, Not } from 'typeorm';

import { getConnection } from "typeorm";

@Injectable()
export class PrestamoService {
    constructor(
        @InjectRepository(Prestamo)
        private readonly PrestamoRepository: Repository<Prestamo>,
    ) { }

    async findAll() {
        return this.PrestamoRepository.find({ CANTFAL: Not(0) });
    }

    async personalizado() {
        return await getConnection()
            .createQueryBuilder()
            .select("prestamo")
            .from(Prestamo, "prestamo")
            .where("prestamo.CODPRES = :CODPRES", { CODPRES: 101 })
            .getOne();
    }

}
