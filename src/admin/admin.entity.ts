import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("admin")
export class AdminEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ name: "name", type: "character varying", })
    name: string;
    @Column()
    username: string;
    @Column()
    password: string;
    @Column()
    address: string;
    @Column()
    filename: string;



}