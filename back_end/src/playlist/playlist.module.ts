import { Module } from '@nestjs/common';
import { PlaylistController } from './playlist.controller';
import { PlaylistService } from './playlist.service';
import { PlaylistResolver } from './playlist.resolver';

@Module({
  controllers: [PlaylistController],
  providers: [PlaylistService, PlaylistResolver]
})
export class PlaylistModule { }
