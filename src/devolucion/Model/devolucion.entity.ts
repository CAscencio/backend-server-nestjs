import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Prestamo } from "./../../prestamo/Model/Prestamo.entity";


@Entity('PRESTAMO_DETALLE')
export class Devolucion{

    @PrimaryGeneratedColumn()
    CODDET?: number;

    @ManyToOne(type => Prestamo)
    @JoinColumn({ name: 'CODPRES' })
    CODPRES: number;

    @Column({ type: "number", width: 10 })
    CANTDET: number;

    @Column()
    FECHENT?: string;

    @Column("char", { length: 1 })
    TIPDET: string;
}