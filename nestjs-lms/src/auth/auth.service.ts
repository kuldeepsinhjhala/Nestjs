import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    registerUser() {
        //logic for register user
        return { message: 'User registered successfully!' };
    }
}
