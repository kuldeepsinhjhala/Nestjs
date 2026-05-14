import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {

    /*
    //Method-1
    messagesRepo: MessagesRepository;
    constructor() {
        //Here Service class is creating its own dependencies
        //DONT DO THIS ON REAL APPS
        this.messagesRepo = new MessagesRepository();
    }
    */

    /*
    //Method-2 (Long code)
    messagesRepo: MessagesRepository;
    constructor(messagesRepo: MessagesRepository) {
        this.messagesRepo = messagesRepo;
    }
    */

    //Method-2 (Short code)
    constructor(public messagesRepo: MessagesRepository) { } //messagesRepo argument will be automatically assigned as a property to a class.  

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        return this.messagesRepo.create(content);
    }

}