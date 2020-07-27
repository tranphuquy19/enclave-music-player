import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { IdeaEnitity } from 'src/idea/idea.entity';
import { UserResolver } from './user.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, IdeaEnitity])],
  controllers: [UserController],
  providers: [UserService, UserResolver]
})
export class UserModule { }
