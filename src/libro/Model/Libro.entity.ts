import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm';
import { Prestamo } from './../../prestamo/Model/Prestamo.entity';

@Entity('LIBRO')
export class Libro {
  @PrimaryColumn()
  CODLIB: number;

  @Column()
  TITLIB: string;

  @Column()
  CODAUT: number;

  @Column()
  CODCAT: number;

  @Column()
  CODEDIT: number;

  @Column()
  CANTLIB: number;

  @Column()
  ANNLNZLIB: string;

  @Column()
  PAGLIB: number;

  @Column()
  DESCLIB: string;

  @Column()
  FORINGLIB: string;

  @Column()
  ESTLIB: string;

  @Column()
  DIRUBILIB: string;

  @OneToMany(type => Prestamo, prestamo => prestamo.CODLIB)
  libro: Prestamo;
}
