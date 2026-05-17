import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) { }

    async signup(email: string, password: string) {
        // 1. see if email is in use
        const users = await this.usersService.find(email);
        if (users.length) {
            throw new BadRequestException('email in use');
        }

        // 2. Hash the users password
        // generate the salt
        const salt = randomBytes(8).toString('hex');
        const hash = (await scrypt(password, salt, 32)) as Buffer;

        // 3. join the hashed result and the salt together
        const result = salt + '.' + hash.toString('hex');

        // 4. Create a new user and save it
        const user = this.usersService.create(email, result); 

        // 5. return the user
        return user;
    }

    signin() {

    }
}