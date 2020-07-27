import { Resolver, Query, Args } from '@nestjs/graphql';
import { TrackService } from './track.service';
import { TrackRO } from './track.dto';
import { ArtistRO } from 'src/artist/artist.dto';

@Resolver('Track')
export class TrackResolver {
    constructor(private trackService: TrackService) { }

    @Query()
    track(@Args('id') id: number): Promise<TrackRO> {
        return this.trackService.readTrack(id);
    }

    @Query()
    find(@Args('key') key: string): Promise<TrackRO[]> {
        return this.trackService.findTrack(key);
    }
}
