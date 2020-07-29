import { ArtistRO } from "./artist.dto";
import { appConfig, apiConfig } from 'src/config';
import Axios from "axios";
import camelcaseKey from 'camelcase-keys';
import { plainToClass } from 'class-transformer';
import { HttpException, HttpStatus } from '@nestjs/common';

export class ArtistApi {
    static async readArtist(artistId: number): Promise<ArtistRO> {
        const { data } = await Axios.get<ArtistRO>(`https://${appConfig.rapidApiHost}/artist/${artistId}`, {
            headers: apiConfig.headers,
            transformResponse: [(data) => {
                data = JSON.parse(data);
                if (data.error) throw new HttpException(`Couldn't find Artist with id = ${artistId}`, HttpStatus.NOT_FOUND);
                data = camelcaseKey(data, { deep: true });
                return plainToClass(ArtistRO, data);
            }]
        });
        return data;
    }
}