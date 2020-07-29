import { Injectable } from '@nestjs/common';
import { PlaylistRO } from './playlist.dto';
import { PlaylistApi } from './playlist.api';

@Injectable()
export class PlaylistService {

    readPlaylist(id: number): Promise<PlaylistRO> {
        return PlaylistApi.readPlaylist(id);
    }
}
