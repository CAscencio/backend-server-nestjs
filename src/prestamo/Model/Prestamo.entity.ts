import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('PRESTAMO')
export class Prestamo {

    @PrimaryGeneratedColumn()
    CODPRES: number;

    @Column()
    CODBIBL: number;

    @Column()
    CODLECT: number;

    @Column()
    FSALPRES: string;

    @Column()
    FENTPRES: string;

    @Column()
    CANTFAL: number;

    @Column()
    CODLIB: number;

}
