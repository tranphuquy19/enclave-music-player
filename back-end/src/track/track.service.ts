import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import { apiConfig, appConfig } from 'src/config';
import { TrackRO } from './track.dto';
import { plainToClass } from 'class-transformer';
import camelcaseKey from 'camelcase-keys';

@Injectable()
export class TrackService {

    async readTrack(trackId) {
        let { data } = await Axios.get<TrackRO>(`https://${appConfig.rapidApiHost}/track/${trackId}`, { headers: apiConfig.headers });
        data = camelcaseKey(data, {deep: true});
        let track = new TrackRO();
        track = plainToClass(TrackRO, data);
        return track;
    }
}
