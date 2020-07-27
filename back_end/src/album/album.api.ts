import { AlbumRO } from './album.dto';
import { appConfig, apiConfig } from 'src/config';
import Axios from 'axios';
import camelcaseKey from 'camelcase-keys';
import { plainToClass } from 'class-transformer';

export class AlbumApi {
    static async readAlbum(albumId: number): Promise<AlbumRO> {
        const { data } = await Axios.get<AlbumRO>(`https://${appConfig.rapidApiHost}/album/${albumId}`, {
            headers: apiConfig.headers,
            transformResponse: [(data) => {
                data = camelcaseKey(JSON.parse(data), { deep: true });
                data.tracks = data.tracks.data;
                return plainToClass(AlbumRO, data);
            }]
        });
        return data;
    }
}