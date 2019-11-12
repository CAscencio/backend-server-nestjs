import { Entity, Column, OneToMany, PrimaryColumn } from "typeorm";
import { Prestamo } from "./../../prestamo/Model/Prestamo.entity";

@Entity('PERSONA')
export class Persona{
@PrimaryColumn()
CODPER: number;

@Column()
NOMPER: string;

@Column()
APEPER: string;

@Column()
DNIPER: number;

@Column()
TIPPER: string;

@Column()
GRADAUL: string;

@Column()
SECCAUL: string;

@Column()
USUPER: string;

@Column()
PASSPER: string;

@Column()
CODUBI: number;

@OneToMany(type => Prestamo, prestamo => prestamo.CODBIBL)
bibliotecario: Prestamo;

@OneToMany(type => Prestamo, prestamo => prestamo.CODLECT)
lector: Prestamo;

}
