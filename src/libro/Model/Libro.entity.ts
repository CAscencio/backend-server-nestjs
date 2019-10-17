import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('LIBRO')
export class Libro {
  @PrimaryGeneratedColumn()
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
}
