import { Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import { AlbumResolver } from './album.resolver';
import { TrackModule } from '../track/track.module';

@Module({
  imports: [TrackModule],
  controllers: [AlbumController],
  providers: [AlbumService, AlbumResolver]
})
export class AlbumModule { }
