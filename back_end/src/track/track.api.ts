import { TrackRO } from "./track.dto";
import Axios from "axios";
import { apiConfig, appConfig } from 'src/config';
import { plainToClass } from "class-transformer";
import camelcaseKey from 'camelcase-keys';

export class TrackApi {

    static async readTrack(trackId: number) : Promise<TrackRO> {
        const { data } = await Axios.get<TrackRO>(`https://${appConfig.rapidApiHost}/track/${trackId}`, {
            headers: apiConfig.headers, transformResponse: [(data) => {
                data = camelcaseKey(JSON.parse(data), { deep: true });
                return plainToClass(TrackRO, data);
            }]
        });
        return data;
    }

    static async findTrack(key: string) : Promise<TrackRO[]> {
        const { data } = await Axios.get<TrackRO[]>(`https://${appConfig.rapidApiHost}/search?q=${key}`, {
            headers: apiConfig.headers, transformResponse: [(data) => {
                let tracks = JSON.parse(data).data;
                tracks = tracks.map(track => {
                    data = camelcaseKey(track, { deep: true });
                    return plainToClass(TrackRO, data);
                })
                return tracks;
            }]
        });
        return data;
    }
}