import { Injectable } from '@nestjs/common';
import { ArtistRO } from './artist.dto';
import { ArtistApi } from './artist.api';

@Injectable()
export class ArtistService {

    readArtist(id: number): Promise<ArtistRO> {
        return ArtistApi.readArtist(id);
    }
}
