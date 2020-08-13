import { Module } from '@nestjs/common';
import { PlaylistController } from './playlist.controller';
import { PlaylistService } from './playlist.service';
import { PlaylistResolver } from './playlist.resolver';
import { TrackModule } from '../track/track.module';

@Module({
  imports: [TrackModule],
  controllers: [PlaylistController],
  providers: [PlaylistService, PlaylistResolver]
})
export class PlaylistModule { }
