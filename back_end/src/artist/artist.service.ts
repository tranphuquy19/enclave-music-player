import { Injectable } from '@nestjs/common';
import { ArtistRO } from './artist.dto';
import { apiConfig, appConfig } from 'src/config';
import Axios from 'axios';
import { plainToClass } from 'class-transformer';
import camelcaseKey from 'camelcase-keys';
import { ArtistApi } from './artist.api';

@Injectable()
export class ArtistService {

    readArtist(id: number): Promise<ArtistRO> {
        return ArtistApi.readArtist(id);
    }
}
