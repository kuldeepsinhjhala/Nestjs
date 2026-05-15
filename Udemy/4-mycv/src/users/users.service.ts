import { Injectable, NotFoundException } from '@nestjs/common';
import { Not, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    /*
    //Long code
    repo: Repository<User>;
    constructor(repo: Repository<User>) {
        this.repo = repo;
    }
    */

    //Short Code
    constructor(@InjectRepository(User) private repo: Repository<User>) {
    }
    create(email: string, password: string) {
        const user = this.repo.create({ email, password }); //used to create an instance of an entity
        //Processing can be done on entity

        return this.repo.save(user); //entity is then saved
    }

    findOne(id: number) {
        return this.repo.findOne({ where: { id } }); //Always return 1 record or null if not found
    }

    find(email: string) {
        return this.repo.find({ where: { email } }); //Always return an array of all matching or returns an empty array
    }

    async update(id: number, attrs: Partial<User>) {
        const user = await this.findOne(id);
        if (!user) {
            throw new NotFoundException('user not found');
        }
        Object.assign(user, attrs);
        return this.repo.save(user);
    }

    async remove(id: number) {
        const user = await this.findOne(id);
        if (!user) {
            throw new NotFoundException('user not found');
        }
        return this.repo.remove(user);
    }
}

//remove() is designed to delete an entity
//delete() is designed to delete an id from an entity