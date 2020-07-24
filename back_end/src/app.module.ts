import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { IdeaModule } from './idea/idea.module';
import { UserModule } from './user/user.module';
import { TrackModule } from './track/track.module';
import { ArtistModule } from './artist/artist.module';
import { AlbumModule } from './album/album.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql']
    }),
    TypeOrmModule.forRoot(),
    // IdeaModule,
    ArtistModule,
    AlbumModule,
    TrackModule,
    UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
