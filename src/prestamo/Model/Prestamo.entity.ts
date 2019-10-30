import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { Persona } from "./../../persona/Model/Persona.entity";
import { Libro } from "./../../libro/Model/Libro.entity";

@Entity('PRESTAMO')
export class Prestamo {

    @PrimaryGeneratedColumn()
    CODPRES?: number;

   /*  @Column()
    CODBIBL: number; */
    @ManyToOne(type => Persona)
    @JoinColumn({ name: 'CODBIBL' })
    CODBIBL: Persona;

   /*  @Column()
    CODLECT: number; */

    @ManyToOne(type => Persona)
    @JoinColumn({ name: 'CODLECT' })
    CODLECT: Persona;

    @Column()
    FSALPRES?: string;

    @Column()
    FENTPRES?: string;

    @Column()
    CANTFAL: number;

    /* @Column()
    CODLIB: number; */

    @ManyToOne(type => Libro)
    @JoinColumn({ name: 'CODLIB' })
    CODLIB: Libro;
}
