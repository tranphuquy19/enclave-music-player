import { Injectable } from '@nestjs/common';
import { PlaylistRO } from './playlist.dto';
import { PlaylistApi } from './playlist.api';
import { TrackService } from '../track/track.service';

@Injectable()
export class PlaylistService {
    constructor(private trackService: TrackService) { }

    async readPlaylist(id: number): Promise<PlaylistRO> {
        let resPlaylist = await PlaylistApi.readPlaylist(id);
        const { tracks } = resPlaylist;
        resPlaylist.tracks = await this.trackService.mergeDatas(tracks);
        return resPlaylist;
    }
}
