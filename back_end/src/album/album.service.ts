import { Injectable } from '@nestjs/common';
import { AlbumRO } from './album.dto';
import { AlbumApi } from './album.api';

@Injectable()
export class AlbumService {

    readAlbum(id: number): Promise<AlbumRO> {
        return AlbumApi.readAlbum(id);
    }
}
