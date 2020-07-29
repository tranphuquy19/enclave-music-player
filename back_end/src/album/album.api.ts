import { AlbumRO } from './album.dto';
import { appConfig, apiConfig } from 'src/config';
import Axios from 'axios';
import camelcaseKey from 'camelcase-keys';
import { plainToClass } from 'class-transformer';
import { HttpException, HttpStatus } from '@nestjs/common';

export class AlbumApi {
    static async readAlbum(albumId: number): Promise<AlbumRO> {
        const { data } = await Axios.get<AlbumRO>(`https://${appConfig.rapidApiHost}/album/${albumId}`, {
            headers: apiConfig.headers,
            transformResponse: [(data) => {
                data = camelcaseKey(JSON.parse(data), { deep: true });
                if (data.error) throw new HttpException(`Couldn't find Album with id = ${albumId}`, HttpStatus.NOT_FOUND);
                data.tracks = data.tracks.data;
                return plainToClass(AlbumRO, data);
            }]
        });
        return data;
    }
}