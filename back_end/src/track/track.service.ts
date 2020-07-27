import { Injectable } from '@nestjs/common';
import { TrackRO } from './track.dto';
import { TrackApi } from './track.api';

@Injectable()
export class TrackService {

    readTrack(trackId): Promise<TrackRO> {
        return TrackApi.readTrack(trackId);
    }

    findTrack(key): Promise<TrackRO[]> {
        return TrackApi.findTrack(key);
    }
}
