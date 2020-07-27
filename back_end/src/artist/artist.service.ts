import { Injectable } from '@nestjs/common';
import { ArtistRO } from './artist.dto';
import { apiConfig, appConfig } from 'src/config';
import Axios from 'axios';
import { plainToClass } from 'class-transformer';
import camelcaseKey from 'camelcase-keys';

@Injectable()
export class ArtistService {

    async readArtist(artistId): Promise<ArtistRO> {
        let { data } = await Axios.get<ArtistRO>(`https://${appConfig.rapidApiHost}/artis/${artistId}`, {
            headers: apiConfig.headers, transformResponse: [(data) => {
                data = JSON.parse(data);
                return camelcaseKey(data, { deep: true });
            }]
        });
        let track = plainToClass(ArtistRO, data);
        return track;
    }
}
