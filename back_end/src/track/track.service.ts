import { Injectable } from '@nestjs/common';
import { TrackRO } from './track.dto';
import { TrackApi } from './track.api';

@Injectable()
export class TrackService {

    async readTrack(trackId): Promise<TrackRO> {
        return TrackApi.readTrack(trackId);
    }

    async findTrack(key) : Promise<TrackRO[]> {
        return TrackApi.findTrack(key);
    }
}
