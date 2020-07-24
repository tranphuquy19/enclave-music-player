import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import { apiConfig, appConfig } from 'src/config';
import { TrackRO } from './track.dto';
import { plainToClass } from 'class-transformer';
import camelcaseKey from 'camelcase-keys';

@Injectable()
export class TrackService {

    async readTrack(trackId) {
        let { data } = await Axios.get<TrackRO>(`https://${appConfig.rapidApiHost}/track/${trackId}`, {
            headers: apiConfig.headers, transformResponse: [(data) => {
                data = JSON.parse(data);
                return camelcaseKey(data, { deep: true });
                // console.log(data);
                // return data;
            }]
        });
        let track = new TrackRO();
        track = plainToClass(TrackRO, data);
        return track;
    }
}
