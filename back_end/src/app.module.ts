import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { TrackModule } from './track/track.module';
import { ArtistModule } from './artist/artist.module';
import { AlbumModule } from './album/album.module';
import { PlaylistModule } from './playlist/playlist.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql']
    }),
    TypeOrmModule.forRoot(),
    ArtistModule,
    AlbumModule,
    TrackModule,
    UserModule,
    PlaylistModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
