import { Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import { AlbumResolver } from './album.resolver';

@Module({
  controllers: [AlbumController],
  providers: [AlbumService, AlbumResolver]
})
export class AlbumModule { }
