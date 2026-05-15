import { IsEmail } from "class-validator";
import { AfterInsert, AfterRemove, AfterUpdate, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @AfterInsert()
    logInsert() {
        console.log('Inserted user with id, ', this.id);
    }

    @AfterUpdate()
    logUpdate() {
        console.log('Inserted user with id, ', this.id);
    }

    @AfterRemove()
    logRemove() {
        console.log('Removed User with id', this.id);
    }
}

//Hooks allows to define the function in entity  @AfterInsert(),  @AfterUpdate(), @AfterRemove() are hooks. 
//If you create an entity using create() and then save that entity then hooks are executed. 
//If you directly save() without creating an entity then hooks will not be executed. 