import { Resolver, Query, Args } from '@nestjs/graphql';
import { ArtistRO } from './artist.dto';
import { ArtistService } from './artist.service';

@Resolver('Artistt')
export class ArtistResolver {
    constructor(private artistService: ArtistService) { }

    @Query()
    artist(@Args('id') id: Number): Promise<ArtistRO> {
        return this.artistService.readArtist(id);
    }
}
