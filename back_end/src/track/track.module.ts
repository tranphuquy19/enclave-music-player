import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { TrackResolver } from './track.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrackEntity } from './track.entity';
import { UserEntity } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrackEntity, UserEntity])],
  controllers: [TrackController],
  providers: [TrackService, TrackResolver],
  exports: [TrackService]
})
export class TrackModule { }
