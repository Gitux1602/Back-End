import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    idp!: number;

    @Column()
    namep!: string;

    @Column()
    description!: string;

    @Column()
    price!: number;
    
    @Column()
    stock!: number;
    
    destroy: any;
    static create: any;
    update: any;
}