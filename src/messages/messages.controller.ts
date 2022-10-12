import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

    constructor(private messageService: MessagesService) {}

    @Post()
    createMessage(@Body() dto: CreateMessageDto) {
        return this.messageService.create(dto)
    }

    @Get()
    getAll() {
        return this.messageService.getAllMessages();
    }

    @Get(':idFrom/:idTo')
    getByEmail(@Param('idFrom') idFrom: number, @Param('idTo') idTo: number) {
        return this.messageService.getById(idFrom, idTo);
    }
}
