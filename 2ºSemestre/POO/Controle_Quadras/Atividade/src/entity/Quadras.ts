import 'reflect-metadata'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("quadras")
export class Quadras{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    name: string;

    @Column("varchar")
    type: string;

    @Column("boolean")
    isLocate: boolean;
}