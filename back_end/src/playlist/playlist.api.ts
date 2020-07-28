import { PlaylistRO } from './playlist.dto';
import { appConfig, apiConfig } from 'src/config';
import camelcaseKey from 'camelcase-keys';
import { plainToClass } from 'class-transformer';
import Axios from 'axios';

export class PlaylistApi {
    static async readPlaylist(playlistId): Promise<PlaylistRO> {
        let { data } = await Axios.get<PlaylistRO>(`https://${appConfig.rapidApiHost}/playlist/${playlistId}`, {
            headers: apiConfig.headers, transformResponse: [(data) => {
                data = JSON.parse(data);
                camelcaseKey(data, { deep: true });
                return plainToClass(PlaylistRO, data)
            }]
        });
        return data;
    }
}