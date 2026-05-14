import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message-dto';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {

    /*
    //Method-1
    messagesService: MessagesService;
    constructor() {
        //Here Service class is creating its own dependencies
        //DONT DO THIS ON REAL APPS
        //Use Dependency Injection
        this.messagesService = new MessagesService();
    }
    */

    //Method-2 (Long)
    /*
    messagesService: MessagesService;
    constructor(messagesService: MessagesService) {
        this.messagesService = messagesService;
    }
    */

    //Method-2 (Short)
    constructor(public messagesService: MessagesService) { }

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    async listMessage(@Param('id') id: string) {
        const message = await this.messagesService.findOne(id);
        if (!message) {
            throw new NotFoundException('message not found');
        }
        return message;
    }
}