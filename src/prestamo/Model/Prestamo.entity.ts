import { Entity, Column, ManyToOne, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { Persona } from "./../../persona/Model/Persona.entity";
import { Libro } from "./../../libro/Model/Libro.entity";
import { Devolucion } from "./../../devolucion/Model/devolucion.entity";

@Entity('PRESTAMO')
export class Prestamo {

    @PrimaryColumn()
    CODPRES?: number;

    @ManyToOne(type => Persona)
    @JoinColumn({ name: 'CODBIBL' })
    CODBIBL: Persona;

    @ManyToOne(type => Persona)
    @JoinColumn({ name: 'CODLECT' })
    CODLECT: Persona;

    @Column()
    FSALPRES?: Date;

    @Column()
    FENTPRES?: Date;

    @Column()
    CANTFAL: number;

    @ManyToOne(type => Libro)
    @JoinColumn({ name: 'CODLIB' })
    CODLIB: Libro;

    @OneToMany(type => Devolucion, devolucion => devolucion.CODPRES)
    devolucion: Devolucion;
}
