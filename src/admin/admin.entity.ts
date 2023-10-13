import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("admin")
export class AdminEntity{
@PrimaryColumn()
    id: number;
    @Column({name:"firstname", type:"character varying",})
    name:string;
}