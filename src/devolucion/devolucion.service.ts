import { Injectable } from '@nestjs/common';
import { Devolucion } from './Model/devolucion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not } from 'typeorm';

@Injectable()
export class DevolucionService {

    constructor(
        @InjectRepository(Devolucion)
        private readonly DevolucionRepository: Repository<Devolucion>,
    ) { }

    /*     async findAll() {
            return this.DevolucionRepository.find({ TIPDET: 'P'});
        }  */

    async findAll() {
        return this.DevolucionRepository.createQueryBuilder('devolucion')
            .innerJoinAndSelect('devolucion.CODPRES', 'CODPRES')
            .innerJoinAndSelect('CODPRES.CODLECT', 'CODLECT')
            .where("devolucion.TIPDET = :TIPDET", { TIPDET: 'P' })
            .andWhere("CODPRES.CANTFAL != :CANTFAL", { CANTFAL: 0 })
            .getMany();
    }
}
