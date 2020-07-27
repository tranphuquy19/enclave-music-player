import { Resolver, Query, Args } from '@nestjs/graphql';
import { AlbumService } from './album.service';
import { AlbumRO } from './album.dto';

@Resolver('Album')
export class AlbumResolver {
    constructor(private albumService: AlbumService) { }

    @Query()
    album(@Args('id') id: number): Promise<AlbumRO> {
        return this.albumService.readAlbum(id);
    }
}
