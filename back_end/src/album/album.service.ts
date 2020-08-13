import { Injectable } from '@nestjs/common';
import { AlbumRO } from './album.dto';
import { AlbumApi } from './album.api';
import { TrackService } from '../track/track.service';

@Injectable()
export class AlbumService {
    constructor(private trackService: TrackService) { }

    async readAlbum(id: number): Promise<AlbumRO> {
        let resAlbum = await AlbumApi.readAlbum(id);
        const { tracks } = resAlbum;
        resAlbum.tracks = await this.trackService.mergeDatas(tracks);
        return resAlbum;
    }
}
