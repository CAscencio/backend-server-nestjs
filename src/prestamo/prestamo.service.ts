import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prestamo } from './Model/Prestamo.entity';
import { Repository, Not } from 'typeorm';

import { getConnection } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class PrestamoService {
  constructor(
    @InjectRepository(Prestamo)
    private readonly PrestamoRepository: Repository<Prestamo>,
  ) {}

  // -----------  METODOS PARA EL CRUD -----------------------

  /*     //LISTAR
    async findAll() {
        return this.PrestamoRepository.find({ CANTFAL: Not(0) });
    } */

  async findAll() {
    return this.PrestamoRepository.createQueryBuilder('prestamo')
      .innerJoinAndSelect('prestamo.CODBIBL', 'CODBIBL')
      .innerJoinAndSelect('prestamo.CODLECT', 'CODLECT')
      .innerJoinAndSelect('prestamo.CODLIB', 'CODLIB')
      .getMany();
  }

  //CREAR
  async create(prestamo: Prestamo): Promise<Prestamo> {
    return await this.PrestamoRepository.save(prestamo);
  }

  //ACTUALIZAR
  async update(prestamo: Prestamo): Promise<UpdateResult> {
    return await this.PrestamoRepository.update(prestamo.CODPRES, prestamo);
  }

  //ELIMINAR
  async delete(CODPRES): Promise<DeleteResult> {
    return await this.PrestamoRepository.delete(CODPRES);
  }

  //PROCEDURE DEVOLUCIÓN
//   async procedure(email: string){
//     return await this.usuariosRepository.query(
//       "sp_prueba @email='" + email + "'",
//     );
//   }

  async personalizado() {
    return await getConnection()
      .createQueryBuilder()
      .select('prestamo')
      .from(Prestamo, 'prestamo')
      .where('prestamo.CODBIBL = :CODBIBL', { CODBIBL: 2 })
      .printSql()
      .getMany();
  }

  async consultaSinProcesar() {
    return await getConnection().query(`SELECT
        CODPRES,
        CONCAT(PERSONA.NOMPER,CONCAT(' ',PERSONA.APEPER)) AS CODBIBL,
        CONCAT(LECTOR.NOMPER,CONCAT(' ',LECTOR.APEPER)) AS  CODLECT,
        TO_CHAR(TO_DATE(FSALPRES, 'DD-MM-YY'),'DD Mon YYYY','nls_date_language=spanish') AS FSALPRES,
        TO_CHAR(TO_DATE(FENTPRES, 'DD-MM-YY'),'DD Mon YYYY','nls_date_language=spanish') AS FENTPRES,
        CANTFAL,
        PRESTAMO.CODLIB
    FROM PRESTAMO
        INNER JOIN PERSONA
            ON PERSONA.CODPER = PRESTAMO.CODBIBL
        INNER JOIN PERSONA  LECTOR
            ON LECTOR.CODPER = PRESTAMO.CODLECT
        INNER JOIN LIBRO
            ON LIBRO.CODLIB = PRESTAMO.CODLIB
        WHERE CANTFAL != 0
        ORDER BY FSALPRES DESC`);
  }
}
