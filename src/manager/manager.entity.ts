import { AdminEntity } from "src/admin/admin.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity("manager")
export class ManagerEntity
{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name:string;
    @Column()
    username:string;

    @ManyToOne(() => AdminEntity, admin => admin.managers)
    admin: AdminEntity;

}