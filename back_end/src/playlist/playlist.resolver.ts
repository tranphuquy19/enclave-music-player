import { Resolver, Args } from '@nestjs/graphql';
import { PlaylistService } from './playlist.service';
import { Query } from '@nestjs/graphql';
import { PlaylistRO } from './playlist.dto';

@Resolver('Playlist')
export class PlaylistResolver {
    constructor(private playlistService: PlaylistService) { }

    @Query()
    playlist(@Args('id') id: number): Promise<PlaylistRO> {
        return this.playlistService.readPlaylist(id);
    }
}
