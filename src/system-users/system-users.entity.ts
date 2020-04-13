import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import {Wallets} from '../wallets/wallets.entity';

@Entity()
export class SystemUsers {
    @PrimaryGeneratedColumn({name: "sysuser_id"})
    sysuserId: number;

    @Column({length: 50})
    name : string;

    @Column({length: 100})
    email : string;
    
    @Column({length: 255})
    password : string;

    @Column({ nullable: true, name : "created_at" })
    createdAt: number;

    @Column({ nullable: true, name : "updated_at" })
    updatedAt: number;
}