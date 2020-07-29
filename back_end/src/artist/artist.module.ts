import { Module } from '@nestjs/common';
import { ArtistController } from './artist.controller';
import { ArtistService } from './artist.service';
import { ArtistResolver } from './artist.resolver';

@Module({
  controllers: [ArtistController],
  providers: [ArtistService, ArtistResolver]
})
export class ArtistModule { }
