import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { Message } from './messages.model';

@Module({
  providers: [MessagesService],
  controllers: [MessagesController],
  imports: [
    SequelizeModule.forFeature([User, Message])
  ],
  exports: [MessagesService]
})
export class MessagesModule {}
