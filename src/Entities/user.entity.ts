import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"Users"})
export class User {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    username:string;

    @Column()
    name:string;

    @Column()
    lastname:string;

    @Column()
    email:string;

    @Column({nullable:true})
    position:string;

    @Column({nullable:true})
    age:number;

}