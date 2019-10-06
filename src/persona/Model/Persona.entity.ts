import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('PERSONA')
export class Persona{
@PrimaryGeneratedColumn()
CODPER: number;

@Column()
NOMPER: string

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

}