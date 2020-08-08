import { Module, HttpModule } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { TrackResolver } from './track.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrackEntity } from './track.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrackEntity])],
  controllers: [TrackController],
  providers: [TrackService, TrackResolver]
})
export class TrackModule { }
