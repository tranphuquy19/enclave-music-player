import { PlaylistRO } from './playlist.dto';
import { appConfig, apiConfig } from 'src/config';
import camelcaseKey from 'camelcase-keys';
import { plainToClass } from 'class-transformer';
import Axios from 'axios';
import { HttpStatus, HttpException } from '@nestjs/common';

export class PlaylistApi {
    static async readPlaylist(playlistId: number): Promise<PlaylistRO> {
        const { data } = await Axios.get<PlaylistRO>(`https://${appConfig.rapidApiHost}/playlist/${playlistId}`, {
            headers: apiConfig.headers,
            transformResponse: [(data) => {
                data = camelcaseKey(JSON.parse(data), { deep: true });
                if (data.error) throw new HttpException(`Couldn't find Playlist with id = ${playlistId}`, HttpStatus.NOT_FOUND);
                data.tracks = data.tracks.data;
                return plainToClass(PlaylistRO, data);
            }]
        });
        return data;
    }
}